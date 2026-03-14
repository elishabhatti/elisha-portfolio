"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "project", path: "#project" },
  { name: "resume", path: "#resume" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <nav className="flex gap-4 p-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md relative">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          onMouseEnter={() => setHoveredPath(link.path)}
          onMouseLeave={() => setHoveredPath(null)}
          className="relative px-4 py-2 capitalize text-[12px] font-medium tracking-widest text-zinc-400 hover:text-white transition-colors duration-300"
        >
          {/* Animated Background Highlight */}
          {hoveredPath === link.path && (
            <motion.span
              layoutId="nav-highlight"
              className="absolute inset-0 bg-[#725afe]/10 border border-[#725afe]/20 rounded-full z-[-1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;