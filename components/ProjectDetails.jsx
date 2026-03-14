"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaNodeJs,
  FaReact,
  FaExternalLinkAlt,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiJsonwebtokens,
  SiRedux,
  SiEjs,
  SiMysql,
  SiAuth0,
  SiSupabase,
  SiSocketdotio,
} from "react-icons/si";

const iconMap = {
  "Node.js": <FaNodeJs />,
  "React.js": <FaReact />,
  "Express.js": <SiExpress />,
  TailwindCSS: <SiTailwindcss />,
  MongoDB: <SiMongodb />,
  JWT: <SiJsonwebtokens />,
  "Redux Toolkit": <SiRedux />,
  EJS: <SiEjs />,
  MySQL: <SiMysql />,
  OAuth: <SiAuth0 />,
  Supabase: <SiSupabase />,
  "Socket.io": <SiSocketdotio />,
};

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl max-h-[80vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* 1. Header Area (Sticky) */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0a0a0a] z-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#725afe] animate-pulse" />
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">
                  Project Insights
                </span>
              </div>
              <button
                onClick={closeModal}
                className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Close
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  ✕
                </div>
              </button>
            </div>

            {/* 2. Scrollable Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Image Banner */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Padding */}
              <div className="p-8 md:p-12 space-y-10">
                {/* Title & Description */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
                    {title}
                    <span className="text-[#725afe] not-italic">.</span>
                  </h2>
                  <p className="text-zinc-300 text-lg leading-relaxed font-light">
                    {description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-[11px] text-zinc-400 font-mono"
                    >
                      <span className="text-[#725afe] text-base">
                        {iconMap[tag]}
                      </span>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Detailed Features (The "Full Details" part) */}
                <div className="space-y-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-white">
                    <FaLayerGroup className="text-[#725afe]" />
                    <h4 className="text-sm font-bold uppercase tracking-widest">
                      Technical Deep Dive
                    </h4>
                  </div>
                  <div className="grid gap-4">
                    {subDescription.map((point, index) => (
                      <div
                        key={index}
                        className="relative pl-6 text-zinc-400 text-sm leading-relaxed before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#725afe] before:rounded-full"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href={href}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#725afe] hover:text-white transition-all duration-500"
                  >
                    Explore Project <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
