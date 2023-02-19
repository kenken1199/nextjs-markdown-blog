import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-24">
        <Link className="ml-2" href="/">
          © My Blog
        </Link>
        <div className="flex">
          <Link href="https://twitter.com/kenken_1199" className="pr-5">
            <TwitterIcon />
          </Link>
          <Link className="mr-2" href="https://github.com/kenken1199">
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
