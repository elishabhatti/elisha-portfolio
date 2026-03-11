"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Stats from "../Stats";
import { FlipWords } from "../ui/flip-words";
import { SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const words = ["MERN Stack Developer", "Next.js Developer", "UI Enthusiast"];

const floatVariants = {
  float: {
    y: [0, -20, 0],
    x: [0, 15, -15, 0],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-black px-6">

      {/* Subtle Gradient Light Behind Text */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #725afe33, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-10 text-white text-3xl"
        variants={floatVariants}
        animate="float"
      >
        <SiReact />
      </motion.div>

      <motion.div
        className="absolute top-28 right-16 text-white text-3xl"
        variants={floatVariants}
        animate="float"
      >
        <SiNodedotjs />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-20 text-white text-3xl"
        variants={floatVariants}
        animate="float"
      >
        <SiNextdotjs />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-24 text-white text-3xl"
        variants={floatVariants}
        animate="float"
      >
        <SiTailwindcss />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-[10vw] md:text-[4.5rem] leading-[1.05] font-semibold tracking-tight mb-6"
        >
          <span className="text-zinc-400 text-2xl md:text-3xl font-normal">
            Hello, I'm
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Elisha
          </span>
          <br />
          <span className="text-white">
            <FlipWords words={words} />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-zinc-400 text-sm md:text-lg max-w-2xl leading-relaxed mb-10 font-light"
        >
          I build modern web applications using the MERN stack and Next.js,
          focused on clean architecture, smooth UI, and performance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex items-center gap-5 flex-wrap justify-center mb-16"
        >
          <a href="#project">
            <InteractiveHoverButton className="text-black">
              View Projects
            </InteractiveHoverButton>
          </a>

          <a href="#contact">
            <InteractiveHoverButton className="text-black">
              Contact Me
            </InteractiveHoverButton>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="w-full flex justify-center"
        >
          <Stats />
        </motion.div>
      </motion.div>

      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Home;