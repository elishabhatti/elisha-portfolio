"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const About = () => {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Movement for the background text
  const xLeft = useTransform(springScroll, [0, 1], [0, -500]);
  const xRight = useTransform(springScroll, [0, 1], [-500, 0]);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#020202] text-white flex flex-col items-center py-24 px-4 overflow-hidden"
    >
      {/* --- TOP HEADING --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-16"
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          About Me
        </h2>
        <div className="h-1 w-12 bg-[#725afe] mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* --- SPACE FILLER LAYER 1: THE TEXT TICKERS --- */}
      <div className="absolute inset-0 z-0 flex flex-col justify-between py-20 opacity-[0.03] select-none pointer-events-none">
        <motion.h1 style={{ x: xLeft }} className="text-[15vw] font-black leading-none whitespace-nowrap">
          MERN STACK NEXTJS MERN STACK NEXTJS
        </motion.h1>
        <motion.h1 style={{ x: xRight }} className="text-[15vw] font-black leading-none whitespace-nowrap">
          ELISHA JAMEEL ELISHA JAMEEL ELISHA JAMEEL
        </motion.h1>
        <motion.h1 style={{ x: xLeft }} className="text-[15vw] font-black leading-none whitespace-nowrap">
          DEVELOPER DESIGNER ARCHITECT DEVELOPER
        </motion.h1>
      </div>

      {/* --- SPACE FILLER LAYER 2: GLOWING ORBS --- */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#725afe]/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10 my-auto">
        
        {/* --- LEFT CONTENT --- */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <span className="h-[1px] w-20 bg-[#725afe]"></span>
            <span className="uppercase tracking-[0.5em] text-[#725afe] text-xs font-black">Bio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]"
          >
            I Code <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-zinc-700">The Future</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
          >
            <div className="space-y-4 border-l-2 border-zinc-800 pl-6">
               <p className="text-zinc-400 leading-relaxed italic text-lg">
                "Not just a developer, but a digital craftsman."
               </p>
               <p className="text-white font-light">
                Specialized in the MERN stack, I create high-performance systems that don't just work—they impress.
               </p>
            </div>
            
            <div className="flex flex-wrap gap-2 content-start">
               {["Next.js 15", "TypeScript", "Tailwind", "Framer", "MongoDB", "Node.js"].map((skill) => (
                 <span key={skill} className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase font-bold text-zinc-500">
                   {skill}
                 </span>
               ))}
            </div>
          </motion.div>

          <div className="flex items-center gap-8 pt-4">
            <a href="/Elisha-Jameel.docx" download>
              <InteractiveHoverButton>
                <span>Download CV</span>
                <FiDownload className="ml-2 inline" />
              </InteractiveHoverButton>
            </a>
            
            <div className="flex gap-5 items-center">
                <a href="https://github.com/elishabhatti" target="_blank" className="text-white hover:text-[#725afe] text-xl transition-all"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/elisha-jameel/" target="_blank" className="text-white hover:text-[#725afe] text-xl transition-all"><BsLinkedin /></a>
            </div>
          </div>
        </div>

        {/* --- RIGHT CONTENT --- */}
        <div className="relative">
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -inset-10 border-[1px] border-white/5 rounded-full"
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-zinc-900 overflow-hidden rounded-[2rem] border border-white/10 group">
              <Image
                src="/images/photo.jpeg"
                alt="Elisha Jameel"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-10 left-10">
                <p className="text-3xl font-black text-white italic">Elisha J.</p>
                <p className="text-[#725afe] text-xs font-bold uppercase tracking-[0.2em]">Full Stack Architect</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- FOOTER LINE --- */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center border-t border-white/5 pt-6 text-[10px] text-zinc-200 tracking-[0.3em] uppercase">
         <span>Karachi, Pakistan</span>
         <span>Available for projects 2026</span>
      </div>
    </section>
  );
};

export default About;