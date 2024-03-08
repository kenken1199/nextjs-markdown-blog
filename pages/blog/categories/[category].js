import fs from "fs";
import matter from "gray-matter";
import PostCard from "@/components/PostCard";

export const getStaticProps = async ({ params }) => {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const category = params.category;

  //   const post =[]
  //   for (const post of posts) {
  //     if (post.frontMatter.categories === category) {
  //         post.push
  //     }

  //   }
  const filteredPosts = posts.filter((post) => {
    return category.includes(post.frontMatter.categories);
  });

  const sortedPosts = filteredPosts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export const getStaticPaths = () => {
  const categories = ["TOEIC", "laravel", "react", "html"];
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};

const Category = ({ posts }) => {
  return (
    <div className="my-8">
      <div className="sm:grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Category;
