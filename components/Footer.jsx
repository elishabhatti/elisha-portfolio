"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#050505] px-6 md:px-24 py-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* LEFT: Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="group">
              <h1 className="text-xl font-bold tracking-tighter text-white">
                Elisha<span className="text-[#725afe]">.</span>
              </h1>
            </Link>
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
              Full Stack Developer
            </p>
          </div>

          {/* CENTER: Copyright (Cleaned up) */}
          <div className="text-center space-y-1">
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
            <p className="text-[9px] text-zinc-700 uppercase tracking-[0.5em]">
              Handcrafted in Pakistan
            </p>
          </div>

          {/* RIGHT: Live Status / Time */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[9px] font-mono text-[#725afe] uppercase tracking-widest font-bold">
                Local Time
              </span>
              <span className="text-sm font-medium text-white tabular-nums">
                {time || "00:00:00 AM"}
              </span>
            </div>
            
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex flex-col items-end">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                Location
              </span>
              <span className="text-sm font-medium text-white uppercase tracking-tight">
                Karachi, PK
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP: Optional subtle text */}
        <div className="mt-12 pt-8 border-t border-white/2 flex justify-center">
            <p className="text-[10px] font-mono text-zinc-100 uppercase tracking-[1em]">
               Design · Code · Develop
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;