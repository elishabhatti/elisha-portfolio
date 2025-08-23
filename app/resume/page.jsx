"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga esse autem, delectus incidunt debitis doloribus quam libero.",
  info: [
    { fieldName: "Name", fieldValue: "Elisha Jameel" },
    { fieldName: "Phone", fieldValue: "(+92) 309 2772847" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "elishajameel270@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Urdu" },
  ],
};
// experience data
const experience = {
  icon: "./assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on freelance and academic projects, specializing in web development and UI/UX design. My focus has been on creating responsive websites, intuitive interfaces, and scalable applications while continuously improving my skills in modern web technologies.",

  items: [
    {
      company: "Rhombix Technologies.",
      position: "Frontend Developer Intern",
      duration: "2024 - 2025",
    },
    {
      company: "Aptech",
      position: "Backend Developer php",
      duration: "2023",
    },
    {
      company: "E-commerce Startup",
      position: "Web Developer",
      duration: "2024 - 2025",
    },
  ],
};
// education

const education = {
  icon: "./assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam deleniti magnam quam officiis sint reprehenderit fugiat.",
  items: [
    {
      institution: "St Mary's English High School.",
      position: "Student",
      duration: "2021 - 2023 ",
    },
    {
      institution: "Aptech DHA.",
      position: "Student",
      duration: "2023 - 2026 ",
    },
    {
      institution: "Rhombix Technologies.",
      position: "Intern",
      duration: "2024 - 2025",
    },
  ],
};

// skills
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam deleniti magnam quam officiis sint reprehenderit fugiat.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FiFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[75vh] flex items-center justify-center p-6 xl:p-12 xl:py-6"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[30px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                  {experience.description.length >= 100 ? experience.description.slice(0, 120) + "..." : experience.description }
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="primary-text-color">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {" "}
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#a238ff]"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="primary-text-color">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {" "}
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#a238ff]"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid mt-5 gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-4">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full group h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                            <div className="text-6xl group-hover:primary-text-color transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-y-6 xl:gap-x-16 xl:w-[820px] w-full mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center xl:justify-start gap-3"
                      >
                        <span className="text-white/60">
                          {item.fieldName}:{" "}
                        </span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
