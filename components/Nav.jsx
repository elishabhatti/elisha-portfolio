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
    <nav className="flex gap-2 p-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-xl relative">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          onMouseEnter={() => setHoveredPath(link.path)}
          onMouseLeave={() => setHoveredPath(null)}
          className="relative px-5 py-2 group overflow-hidden"
        >
          {/* Animated Text */}
          <motion.span
            animate={{
              y: hoveredPath === link.path ? -2 : 0,
              color: hoveredPath === link.path ? "#ffffff" : "#a1a1aa",
            }}
            className={`block capitalize text-[11px] font-bold tracking-[0.2em] transition-all duration-300 ${
              hoveredPath === link.path ? "italic" : "not-italic"
            }`}
          >
            {link.name}
          </motion.span>

          {/* Sliding Glowing Underline */}
          {hoveredPath === link.path && (
            <motion.div
              layoutId="nav-underline"
              className="absolute bottom-1 left-0 right-0 mx-auto w-1/2 h-[2px] bg-[#725afe] shadow-[0_0_12px_#725afe] rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            />
          )}

          {/* Magnetic Background Dot (Optional subtle touch) */}
          {hoveredPath === link.path && (
            <motion.div
              layoutId="nav-dot"
              className="absolute top-1 right-2 w-1 h-1 bg-[#725afe] rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;