"use client";

import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { FiDownload } from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[90vh] bg-black text-white flex flex-col items-center justify-center px-5 sm:px-6 md:px-10 py-16 md:py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-white text-4xl md:text-5xl font-bold text-center mb-14"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 items-center"
      >
        {/* LEFT */}
        <motion.div
          variants={item}
          className="space-y-5 flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 text-[#725afe] font-semibold">
            <span className="text-[#725afe] text-3xl">✦</span>
            <span className="uppercase tracking-[0.35em] text-md">
              About Me
            </span>
          </div>

          {/* BIGGER TITLE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Passionate <br />
            <span className="text-zinc-500 font-medium">MERN Stack Dev.</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-full leading-relaxed font-light">
            I’m a full-stack developer focused on building modern web
            applications using the MERN stack and Next.js. I enjoy creating
            scalable systems with clean UI, smooth animations and polished user
            experiences.
          </p>

          <div className="pt-3">
            <a href="/Elisha-Jameel.docx" download className="inline-block">
              <InteractiveHoverButton>
                <span className="text-black group-hover:text-white">
                  Download CV
                </span>
                <FiDownload className="transition-all duration-300 group-hover:text-white text-xl ml-2 inline" />
              </InteractiveHoverButton>
            </a>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          variants={item}
          className="flex justify-center md:justify-end w-full"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full max-w-100 "
          >
            <Card className="bg-black border border-zinc-800 text-white overflow-hidden p-0 text-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(114,90,254,0.55)]">
              {/* IMAGE */}
              <div className="w-full bg-zinc-900 border-b border-zinc-800 flex items-center justify-center">
                <Image
                  src="/images/photo.jpeg"
                  alt="Elisha Jameel"
                  width={400}
                  height={320}
                  className="w-full h-64 sm:h-72 object-cover"
                  priority
                />
              </div>

              {/* CARD INFO */}
              <CardHeader className="py-2">
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  Elisha Jameel
                </CardTitle>

                <CardDescription className="text-zinc-400 text-sm sm:text-md">
                  MERN Stack & Next.js Developer
                </CardDescription>
              </CardHeader>

              <div className="border-b border-zinc-800 mx-6"></div>

              {/* SOCIAL */}
              <CardFooter className="py-2">
                <div className="flex gap-3 w-full text-lg items-center justify-center">
                  <a
                    href="https://github.com/elishabhatti"
                    target="_blank"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/elisha-jameel/"
                    target="_blank"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsLinkedin />
                  </a>

                  <a
                    href="https://www.instagram.com/elishajameel270/"
                    target="_blank"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsInstagram />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61576620950743"
                    target="_blank"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsFacebook />
                  </a>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
