"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import experience from "../../json/experience.json";
import education from "../../json/education.json";
import skills from "../../json/skills.json";

const icons = {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  FiFigma,
};

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative w-full py-24 px-6 md:px-24 bg-[#050505] overflow-hidden"
    >
      {/* 1. MAIN HEADING (Matches Contact/Project Headers) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-24 text-center"
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight uppercase">
          Resume
        </h2>
        <div className="h-1 w-12 bg-[#725afe] mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* --- EXPERIENCE SECTION --- */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <p className="text-[#725afe] font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              01.
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight uppercase">
              Experience
            </h3>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          <div className="space-y-6">
            {" "}
            {/* Increased gap slightly */}
            {experience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-white/5 bg-white/[0.01] rounded-[2rem] hover:border-[#725afe]/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                  <div className="space-y-2">
                    {/* Role / Position */}
                    <h3 className="text-xl font-medium text-white group-hover:text-[#725afe] transition-colors tracking-tight uppercase">
                      {item.position}
                    </h3>

                    {/* Project Name & Company */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-zinc-300 text-sm font-medium italic">
                        {item.project_name}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#725afe]" />{" "}
                      {/* Minimal Divider */}
                      <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.2em]">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-400 tracking-widest uppercase self-start">
                    {item.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- EDUCATION SECTION --- */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <p className="text-[#725afe] font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              02.
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight uppercase">
              Education
            </h3>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>

          <div className="space-y-4">
            {education.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-white/5 bg-white/[0.01] rounded-[2rem] hover:border-[#725afe]/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-[#725afe] transition-colors tracking-tight">
                      {item.degree || item.position}
                    </h3>
                    <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.2em] mt-1">
                      {item.institution}
                    </p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-400 tracking-widest uppercase">
                    {item.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SKILLS SECTION --- */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <p className="text-[#725afe] font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              03.
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight uppercase">
              Skills
            </h3>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>

          <TooltipProvider delayDuration={100}>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skills.skillList.map((skill, index) => {
                const Icon = icons[skill.icon];
                return (
                  <li key={index}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-24 bg-white/[0.02] border border-white/5 rounded-2xl flex justify-center items-center group hover:border-[#725afe]/30 transition-all">
                        <div className="text-3xl text-zinc-500 group-hover:text-white transition-all duration-300">
                          {Icon && <Icon />}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#0f0f0f] border-white/10 text-white font-mono text-[10px] tracking-widest uppercase">
                        {skill.name}
                      </TooltipContent>
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default Resume;
