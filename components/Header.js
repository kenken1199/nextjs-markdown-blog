import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link className="ml-6 sm:ml-0" href="/">
          LOGO
        </Link>
        <div className="flex">
          <Link href="/blog" className="mr-6">
            Blog
          </Link>
          <Link className="mr-6 sm:mr-0" href="/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
