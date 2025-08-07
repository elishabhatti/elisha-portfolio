import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-4 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Elisha<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
