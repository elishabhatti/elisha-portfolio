"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import work from "../../json/work.json";

const Work = () => {
  const [project, setProject] = useState(work[0]);

  const handleSlideChange = (swiper) => {
    setProject(work[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col mt-6 justify-center xl:p-15 p-5"
    >
      <div className="container mx-auto">
        <h2
          id="work"
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Work
        </h2>
        <div className="flex flex-col xl:flex-row gap-10">
          {/* LEFT */}
          <div className="w-full xl:w-1/2 flex flex-col justify-between order-2 xl:order-none">
            <div className="group flex flex-col gap-6">
              <div className="text-5xl sm:text-7xl xl:text-8xl font-extrabold text-transparent text-outline leading-none">
                {project.num}
              </div>
              <h2 className="text-2xl sm:text-3xl xl:text-[42px] font-bold leading-tight text-white group-hover:primary-text-color transition-colors duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 sm:gap-4">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-lg font-medium primary-text-color"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && project.live.length > 0 && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.live}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-white/5 flex justify-center items-center group transition hover:bg-white/10">
                          <BsArrowUpRight className="text-white text-2xl sm:text-3xl group-hover:primary-text-color transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}
                <Link href={project.github || "#"} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-white/5 flex justify-center items-center group transition hover:bg-white/10">
                        <BsGithub className="text-white text-2xl sm:text-3xl group-hover:primary-text-color transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="w-full"
              onSlideChange={handleSlideChange}
            >
              {work.map((p, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg group">
                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition"></div>
                    <Image
                      src={p.image}
                      alt={p.num}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                btnStyles="bg-[#a238ff] rounded-md text-white xl:text-[20px] sm:text-[22px] xl:w-10 xl:h-10 sm:w-11 sm:h-11 w-7 h-7 flex justify-center items-center transition-all hover:scale-105"
                containerStyles="flex gap-2 absolute right-2 bottom-2 sm:bottom-4 z-20 w-auto"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
