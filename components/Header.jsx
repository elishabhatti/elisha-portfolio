"use client";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#050505]/80 backdrop-blur-md px-6 py-5 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold tracking-tighter text-white">
            Elisha
            <span className="text-[#725afe] group-hover:pl-1 transition-all">
              .
            </span>
          </h1>
        </Link>

        {/* Desktop Nav & Button */}
        <div className="hidden xl:flex items-center gap-12">
          <Nav />
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=elishajameel270@gmail.com"
            target="_blank"
            className="relative"
          >
            <InteractiveHoverButton className="h-10 px-6 text-xs ">
              Hire me
            </InteractiveHoverButton>
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
