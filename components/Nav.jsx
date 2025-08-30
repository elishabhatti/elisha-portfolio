import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "pricing",
    path: "/pricing",
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, delay: 0.2 }}
      transition={{ duration: 0.69 }}
      className="flex gap-4"
    >
      {links.map((link, index) => {
        return (
          <Link
            className={`capitalize font-medium transition-all hover:text-accent ${
              link.path === pathname
                ? "primary-text-color border-b-2 border-[#9630F2]"
                : ""
            }`}
            href={link.path}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default Nav;
