import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import Image from "next/image";
import { NextSeo } from "next-seo";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import remarkPrism from "remark-prism";
import { createElement, Fragment } from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import Link from "next/link";
import remarkUnwrapImages from "remark-unwrap-images";
// import { toc } from "mdast-util-toc";

// const getToc = (options) => {
//   return (node) => {
//     const result = toc(node, options);
//     node.children = [result.map];
//   };
// };

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ["line-numbers"],
    })
    .use(remarkToc, {
      heading: "目次",
      tight: true,
    })
    .use(remarkUnwrapImages)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  // const toc = await unified()
  //   .use(remarkParse)
  //   .use(getToc, {
  //     heading: "目次",
  //     tight: true,
  //   })
  //   .use(remarkRehype)
  //   .use(rehypeStringify)
  //   .process(content);

  return {
    props: {
      frontMatter: data,
      content: result.toString(),
      // toc: toc.toString(),
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ frontMatter, content, slug }) => {
  function MyLink({ children, href }) {
    if (href === "") href = "/";
    return href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  const MyImage = ({ src, alt }) => {
    return (
      <div className="relative max-w-full h-96">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        {/* <Image src={src} alt={alt} width={500} height={500} /> */}
      </div>
    );
  };
  const toReactNode = (content) => {
    return unified()
      .use(rehypeParse, {
        fragment: true,
      })
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
          a: MyLink,
          img: MyImage,
        },
      })
      .processSync(content).result;
  };

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: "website",
          url: `https://kenken1199.netlify.app/blog/posts/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://kenken1199.netlify.app/blog/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <div className="prose prose-lg max-w-none">
        <div className="border">
          <Image
            src={`/${frontMatter.image}`}
            width={1200}
            height={700}
            alt={frontMatter.title}
            className="m-0"
          />
        </div>
        <h1 className="mt-12">{frontMatter.title}</h1>
        <span>{frontMatter.date}</span>
        <div className="space-x-2">
          {frontMatter.categories.map((category) => (
            <span key={category}>
              <Link href={`/blog/categories/${category}`}>{category}</Link>
            </span>
          ))}
        </div>
        {toReactNode(content)}
      </div>
    </>
  );
};

export default Post;
