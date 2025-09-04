"use client";
import { useRef } from "react";
import Card from "../Card";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="xl:p-15 p-5">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[18rem] mt-12">
        {/* Big left block */}
        <div className="relative flex items-end bg-slate-800 rounded-xl md:col-span-3 md:row-span-2 overflow-hidden">
          <img
            src="/assets/coding-pov.png"
            alt="Coding POV"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
                       md:scale-[3] md:left-[50%] md:inset-y-10 
                       lg:scale-[2.5]"
          />
          <div className="p-5 flex flex-col z-10 gap-2">
            <p className="text-lg font-bold">Hi, I'm Elisha Jameel</p>
            <p className="text-white/50 leading-6">
              I excel at crafting elegant digital experiences, and I am
              proficient in various programming languages and technologies.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/4 sm:h-1/3 bg-gradient-to-t from-indigo-950" />
        </div>

        {/* Top right small block */}
        <div className="bg-[#262847] relative rounded-xl md:col-span-3">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Clean Code"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Factory"
              image="/assets/logos/blazor.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Observer"
              image="/assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="TDD"
              containerRef={grid2Container}
              image="/assets/logos/csharp-pink.png"
            />
          </div>
        </div>

        {/* Middle right block (dark/black) */}
        <div className="bg-neutral-800 rounded-xl md:col-span-3"></div>

        {/* Bottom left purple block */}
        <div className="bg-purple-600 rounded-xl md:col-span-2"></div>

        {/* Bottom right block */}
        <div className="bg-slate-800 rounded-xl md:col-span-4"></div>
      </div>
    </section>
  );
};

export default About;
