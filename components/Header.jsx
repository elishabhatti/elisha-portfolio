"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 20px se zyada scroll hote hi background change hoga
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-1000 transition-all duration-500 px-6 xl:px-24 
      ${
        isScrolled
          ? "py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-360 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Elisha<span className="text-[#725afe]">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />
          <div className="h-5 w-[1px] bg-white/10" />
          <Link href="#contact">
            <InteractiveHoverButton className="h-9 px-6 text-[10px] uppercase font-bold tracking-widest">
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
