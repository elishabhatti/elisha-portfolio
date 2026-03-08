"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { FiDownload } from "react-icons/fi";
import Stats from "../Stats";
import Social from "../Social";
import { FlipWords } from "../ui/flip-words";

const words = [
  "MERN Stack Developer",
  "Next.js Developer",
  "UI Enthusiast",
];

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-[#000000]">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[65vh] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #5e35b1 0%, #4527a0 20%, transparent 100%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[40%]"
          style={{
            background:
              "radial-gradient(50% 100% at 50% 100%, #7c4dff 0%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 max-w-9xl mx-auto -mt-40">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[7vw] leading-[1.05] font-medium tracking-tight mb-6"
        >
          Creative & Experienced
          <br />
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.69 }}
            className="inline-block"
          >
            <FlipWords className="text-white" words={words} />
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-xs md:text-[19px] max-w-4xl leading-relaxed mb-10 opacity-60 font-light"
        >
          Experience the synergy of innovation and expertise with our web
          development team. From intuitive interfaces to robust backend systems,
          we are committed to delivering unmatched results for your digital
          projects.
        </motion.p>

        {/* Button + Social */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.69 }}
          className="flex items-center gap-5"
        >
          <div>
            <a href="/Elisha-Jameel.docx" download>
              <InteractiveHoverButton>
                <span className="text-black group-hover:text-white">
                  Download CV
                </span>
                <FiDownload className="transition-all duration-300 group-hover:text-white text-xl ml-2 inline" />
              </InteractiveHoverButton>
            </a>
          </div>
          <div>
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-13 h-13 text-xl border-2 border-white rounded-full transition-all duration-300 flex justify-center items-center text-white hover:bg-[#725afe] text-base hover:text-white"
            />
          </div>
        </motion.div>
      </div>

      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-[#020109] to-transparent pointer-events-none" />

      {/* Stats */}
      <div className="absolute bottom-40 w-full flex justify-center">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
