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
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-2xl text-white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#050505] border-white/10 p-10">
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        <div className="mt-20 mb-20 text-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white tracking-tighter">
              Elisha<span className="text-[#725afe]">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col gap-8 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-md tracking-widest text-zinc-300 hover:text-white capitalize transition-all"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-10 w-full">
            <InteractiveHoverButton className="w-full h-12">
              Hire me
            </InteractiveHoverButton>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;