import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/elishabhatti" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/elisha-jameel/" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, delay: 0.2 }}
      transition={{ duration: 0.69 }}
      className={containerStyles}
    >
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Social;
