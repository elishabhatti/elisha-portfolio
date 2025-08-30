"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ x:   100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, delay: 0.2 }}
        transition={{ duration: 0.69 }}
        className="relative"
      >
        {/* Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/web-developer.png"
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-contain p-5 rounded-full"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#9630F2"
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
