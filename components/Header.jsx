import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 px-6 xl:py-8 xl:px-24 text-white">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="xl:text-3xl text-xl font-semibold">
            Elisha<span className="primary-text-color">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=elishajameel270@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
