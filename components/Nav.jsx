"use client";

import Link from "next/link";

const links = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "project", path: "#project" },
  { name: "resume", path: "#resume" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="capitalize text-[12px] tracking-[0.2em] text-zinc-300 hover:text-[#725afe] transition-all duration-300 relative group"
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#725afe] transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
