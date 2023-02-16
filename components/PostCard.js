import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Image
        // className="border rounded-lg h-40 w-96"
        className="border rounded-lg h-3/5"
        // className="border rounded object-none h-4/5 m-auto"
        src={`/${post.frontMatter.image}`}
        width={1200}
        height={700}
        alt={post.frontMatter.title}
      />
      <div className="px-2 py-4">
        <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
      </div>
    </Link>
  );
};

export default PostCard;
