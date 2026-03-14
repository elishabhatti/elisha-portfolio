"use client";
import { MoveRight } from "lucide-react";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";

const Project = ({ project, index, setPreview }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setPreview({ active: true, index })}
        onMouseLeave={() => setPreview({ active: false, index })}
        // "setIsHidden(true)" modal ko open karega
        onClick={() => setIsHidden(true)} 
        className="group relative flex items-center justify-between py-10 border-b border-white/5 cursor-pointer transition-colors hover:bg-white/[0.01]"
      >
        {/* ... (Baqi ka inner JSX same rahega) ... */}
        <div className="flex items-center gap-10 md:gap-16 relative z-10">
          <span className="text-zinc-700 font-mono text-xs group-hover:text-[#725afe] transition-colors">
            0{index + 1}
          </span>
          <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight group-hover:translate-x-3 transition-transform duration-500">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-12 relative z-10">
          <div className="hidden lg:flex flex-col items-end gap-1">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Role</span>
            <span className="text-[11px] text-zinc-400 font-light italic">Full Stack Dev</span>
          </div>
          
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
            <MoveRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#725afe]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* MODAL RENDER LOGIC CHANGE */}
      {/* Hum && use nahi karenge, isVisible prop pass karenge */}
      <ProjectDetails
        {...project}
        isVisible={isHidden} 
        closeModal={() => setIsHidden(false)}
      />
    </>
  );
};

export default Project;