"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const links = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "project", path: "#project" },
  { name: "resume", path: "#resume" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center group active:scale-95 transition-all">
        <CiMenuFries className="text-xl text-white group-hover:text-[#725afe] transition-colors" />
      </SheetTrigger>
      
      <SheetContent className="flex flex-col bg-[#050505] border-l border-white/10 p-10 w-full sm:max-w-md">
        <SheetTitle className="sr-only">Main Navigation</SheetTitle>

        {/* Subtle Watermark Logo */}
        <div className="absolute bottom-10 -left-10 opacity-[0.03] text-[120px] font-black italic select-none pointer-events-none uppercase">
          Elisha
        </div>

        {/* Brand Identity */}
        <div className="mt-16 mb-20">
          <Link href="/">
            <h1 className="text-4xl font-black text-white tracking-tighter italic uppercase">
              Elisha<span className="text-[#725afe]">.</span>
            </h1>
            <p className="text-[#725afe] font-mono text-[9px] tracking-[0.5em] uppercase mt-2">Full-Stack Developer</p>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="group flex items-baseline gap-4 text-4xl font-bold tracking-tighter text-zinc-500 hover:text-white transition-all duration-300 hover:italic"
            >
              <span className="text-[#725afe] font-mono text-xs tracking-widest">0{index + 1}</span>
              <span className="capitalize">{link.name}</span>
            </Link>
          ))}
          
          {/* Action Button */}
          <div className="mt-12">
            <Link href="#contact">
              <InteractiveHoverButton className="w-full h-16 text-xs uppercase tracking-[0.2em] font-black">
                Let's Build Something
              </InteractiveHoverButton>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;