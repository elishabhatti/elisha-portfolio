"use client";

import { myProjects } from "@/constant";
import Project from "../Project";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [preview, setPreview] = useState({ active: false, index: 0 });
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouse.x, smoothOptions);
  const smoothMouseY = useSpring(mouse.y, smoothOptions);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#050505] py-24 px-6 md:px-24 overflow-hidden"
      id="project"
    >
      {/* --- TOP HEADING ANCHOR --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-20 text-center"
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          Projects
        </h2>
        <div className="h-1 w-12 bg-[#725afe] mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- REFINED SUB-HEADER --- */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10">
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white text-4xl md:text-5xl font-medium tracking-tight"
            >
              Selected <span className="italic font-mono text-[#725afe]">Works</span>
            </motion.h3>
          </div>
          <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mt-4 md:mt-0">
            {myProjects.length} Projects Total // 2024-2026
          </div>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="flex flex-col">
          {myProjects.map((project, index) => (
            <Project 
              key={project.id} 
              project={project} 
              index={index} 
              setPreview={setPreview} 
            />
          ))}
        </div>
      </div>

      {/* --- REFINED FLOATING PREVIEW --- */}
      <motion.div 
        style={{ left: smoothMouseX, top: smoothMouseY }}
        className="fixed z-[100] pointer-events-none hidden lg:flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {preview.active && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-[350px] h-[220px] overflow-hidden rounded-lg shadow-2xl border border-white/10"
            >
              <motion.img 
                src={myProjects[preview.index].image}
                className="w-full h-full object-cover"
                alt="preview"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;