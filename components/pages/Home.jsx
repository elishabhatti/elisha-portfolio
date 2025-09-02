"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";

const Home = () => {
  const words = [
    "Web Developer",
    "Web Designer",
    "Logo Designer",
    "UI/UX Designer",
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full pb-15"
    >
      <div id="home" className="container ">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 pt-6 lg:gap-24 lg:pt-6 pb-14">
          {/* Text */}
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-2 xl:order-none max-w-2xl">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, delay: 0.2 }}
              transition={{ duration: 0.69 }}
            ></motion.span>
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, delay: 0.2 }}
              transition={{ duration: 0.69 }}
              className="h1 mt-2 mb-4  "
            >
              Hello I'm <br />
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, delay: 0.2 }}
                transition={{ duration: 0.69 }}
                className="text-transparent inline-block bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              >
                Elisha Jameel
              </motion.span>
            </motion.h1>
            <motion.h3 className="h3 mb-5">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, delay: 0.2 }}
                transition={{ duration: 0.69 }}
              >
                <FlipWords words={words} />
              </motion.span>
            </motion.h3>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, delay: 0.2 }}
              transition={{ duration: 0.69 }}
              className="max-w-[500px] text-white/80 leading-relaxed mb-6 "
            >
              I excel at crafting elegant digital experiences, and I am
              proficient in various programming languages and technologies.
            </motion.p>
            {/* btn and socials */}
            <div className="flex cursor-pointer flex-col lg:flex-row items-center gap-6">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, delay: 0.2 }}
                transition={{ duration: 0.69 }}
                className="group"
              >
                <InteractiveHoverButton>
                  <a href="/Elisha-Jameel.docx" download>
                    <span className="text-black group-hover:text-white">
                      Download CV
                    </span>
                    <FiDownload className="hover:transition-all duration-300 group-hover:text-white text-xl ml-2 inline" />
                  </a>
                </InteractiveHoverButton>
              </motion.div>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-13 h-13 text-xl border-2 border-white rounded-full hover:transition-all duration-300 flex justify-center items-center text-white hover:bg-[#a238ff] text-base hover:text-white"
              />
            </div>
          </div>

          {/* photo */}
          <div className="order-1 lg:order-none mb-4 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex items-center">
        <Stats />
      </div>
    </motion.section>
  );
};

export default Home;
