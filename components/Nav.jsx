"use client";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "#home" },
  { name: "services", path: "#services" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
  { name: "pricing", path: "#pricing" },
];

const Nav = () => {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, delay: 0.2 }}
      transition={{ duration: 0.69 }}
      className="flex gap-4"
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.path}
          className="capitalize font-medium transition-all hover:text-accent"
        >
          {link.name}
        </a>
      ))}
    </motion.nav>
  );
};

export default Nav;
