import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link className="ml-2" href="/">
          LOGO
        </Link>
        <div className="flex">
          <Link href="/blog" className="pr-5">
            Blog
          </Link>
          <Link className="mr-2" href="/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
