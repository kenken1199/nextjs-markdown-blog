import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">LOGO</Link>
        <div className="flex">
          <div className="pr-5">Blog</div>
          <div>About</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
