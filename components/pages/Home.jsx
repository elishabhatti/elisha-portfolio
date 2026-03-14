"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Stats from "../Stats";
import { FlipWords } from "../ui/flip-words";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiFigma,
  SiExpress,
} from "react-icons/si";

const words = ["MERN Stack Developer", "Next.js Developer", "UI Enthusiast"];

const floatVariants = {
  float: (i) => ({
    y: [0, -20, 0],
    transition: {
      repeat: Infinity,
      duration: 4 + i,
      ease: "easeInOut",
    },
  }),
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden pt-30 bg-[#050505] px-6">
      {/* --- 1. VISIBLE BACKGROUND TEXT (Filling the mid-section) --- */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black uppercase text-white/[0.03] leading-none tracking-tighter">
          DESIGNER
        </h1>
        <h1 className="text-[20vw] font-black uppercase text-white/[0.03] leading-none tracking-tighter">
          DEVELOPER
        </h1>
      </div>

      {/* --- 2. STRONGER GLOW RADIALS (Filling the corners) --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#725afe15,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#3b82f610,transparent_50%)]" />

      {/* --- 3. THE GRID (Texture to remove "Flatness") --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* --- 4. FLOATING ICONS (Z-Index Fixed) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          variants={floatVariants}
          custom={1}
          animate="float"
          className="absolute top-[15%] left-[10%] text-blue-400/30 text-5xl"
        >
          <SiReact />
        </motion.div>
        <motion.div
          variants={floatVariants}
          custom={1}
          animate="float"
          className="absolute top-[50%] left-[13%] text-green-400/30 text-5xl"
        >
          <SiMongodb />
        </motion.div>
        <motion.div
          variants={floatVariants}
          custom={2}
          animate="float"
          className="absolute top-[25%] right-[12%] text-white/20 text-5xl"
        >
          <SiNextdotjs />
        </motion.div>
        <motion.div
          variants={floatVariants}
          custom={3}
          animate="float"
          className="absolute bottom-[20%] left-[15%] text-green-500/20 text-5xl"
        >
          <SiNodedotjs />
        </motion.div>
        <motion.div
          variants={floatVariants}
          custom={3}
          animate="float"
          className="absolute bottom-[50%] right-[15%] text-white/50 text-5xl"
        >
          <SiExpress />
        </motion.div>
        <motion.div
          variants={floatVariants}
          custom={4}
          animate="float"
          className="absolute bottom-[25%] right-[15%] text-cyan-400/30 text-5xl"
        >
          <SiTailwindcss />
        </motion.div>
      </div>

      {/* --- HERO CONTENT --- */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center max-w-5xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Intro Label */}
        <motion.div
          variants={item}
          className="mb-6 px-4 py-1 border border-[#725afe]/30 rounded-full bg-[#725afe]/5"
        >
          <span className="uppercase tracking-[0.4em] text-[#725afe] text-[10px] font-black">
            Available for Work 2026
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8"
        >
          <span className="text-zinc-500 text-2xl font-normal block mb-2 font-mono uppercase tracking-[0.3em]">
            Hello, I am
          </span>
          <span className="text-white">Elisha</span>
          <br />
          <span className="text-[#725afe]">
            <FlipWords words={words} />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light px-4"
        >
          I architect{" "}
          <span className="text-white font-medium">
            high-performance ecosystems
          </span>{" "}
          using the MERN stack. Focused on merging raw logic with{" "}
          <span className="text-white italic">immersive aesthetics.</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center gap-6 mb-20"
        >
          <a href="#project">
            <InteractiveHoverButton className="bg-white text-black">
              View My Work
            </InteractiveHoverButton>
          </a>
          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold border-b border-zinc-800 pb-1"
          >
            Let's Talk →
          </a>
        </motion.div>

        {/* Stats Section with visible Background */}
        <motion.div
          variants={item}
          className="w-full bg-white/2 border border-white/5 backdrop-blur-md rounded-2xl py-5 px-6"
        >
          <Stats />
        </motion.div>
      </motion.div>

      {/* Side Decorative Numbers (Filler) */}
      <div className="absolute left-10 bottom-10 flex flex-col gap-2 font-mono text-[10px] text-zinc-800">
        <span>LOC: 24.8607° N</span>
        <span>KARACHI, PK</span>
      </div>

      <div className="absolute right-10 bottom-10 font-mono text-[10px] text-zinc-800 tracking-tighter uppercase">
        Built with Next.js 15 & Framer Motion
      </div>
    </section>
  );
};

export default Home;
