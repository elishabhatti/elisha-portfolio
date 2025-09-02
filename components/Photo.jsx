"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiGithub,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.69 }}
        className="relative"
      >
        {/* Gradient Blob Background */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-2xl opacity-80 flex items-center justify-center"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
