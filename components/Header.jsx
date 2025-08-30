"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-black border-b-2 border-gray-900 z-50 fixed w-full px-6 py-4 xl:px-24 text-white">
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
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, delay: 0.2 }}
              transition={{ duration: 0.69 }}
            >
              <Button>Hire me</Button>
            </motion.div>
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
