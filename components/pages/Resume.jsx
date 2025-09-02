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
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import about from "../../json/about.json";


// education

const education = {
  icon: "./assets/resume/cap.svg",
  title: "My Education",
  description:
    "Completed my Bachelor's in Computer Science, where I built a strong foundation in programming, web development, and software engineering. I also worked on academic projects that strengthened my problem-solving and teamwork skills.",
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
    "Skilled in modern web development, UI/UX design, and building responsive applications. Proficient with JavaScript, React, Node.js, and familiar with tools like Git, Tailwind CSS, and MongoDB.",

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
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center xl:p-15 p-5"
    >
      <div className="container mx-auto">
        <h2
          id="resume"
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Resume
        </h2>
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
                {/* Short description + Dialog trigger */}
                <div className="flex items-start gap-4">
                  <p className="max-w-[600px] text-white/60 xl:mx-0">
                    {experience.description.length >= 100
                      ? experience.description.slice(0, 120) + "..."
                      : experience.description}
                  </p>

                  {/* Dialog Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-purple-500 transition">
                        <ArrowRight className="w-5 h-5 text-black hover:text-white" />
                      </button>
                    </DialogTrigger>

                    <DialogContent
                      showCloseButton={false}
                      className="max-w-lg bg-black"
                    >
                      <DialogHeader>
                        <DialogTitle>{experience.title}</DialogTitle>
                        <DialogDescription className="text-md leading-7 mt-3">
                          {experience.description}
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
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
                {/* Short description + Dialog trigger */}
                <div className="flex items-start gap-4">
                  <p className="max-w-[600px] text-white/60 xl:mx-0">
                    {education.description.length >= 100
                      ? education.description.slice(0, 120) + "..."
                      : education.description}
                  </p>

                  {/* Dialog Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-purple-500 transition">
                        <ArrowRight className="w-5 h-5 text-black hover:text-white" />
                      </button>
                    </DialogTrigger>

                    <DialogContent
                      showCloseButton={false}
                      className="max-w-lg bg-black text-white"
                    >
                      <DialogHeader>
                        <DialogTitle>{education.title}</DialogTitle>
                        <DialogDescription className="text-md leading-7 mt-3 text-white/80">
                          {education.description}
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
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
              <ul className="grid mt-5 gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-4">
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
                {/* Short description + Dialog trigger */}
                <div className="flex items-start gap-4">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description.length >= 100
                      ? about.description.slice(0, 120) + "..."
                      : about.description}
                  </p>

                  {/* Dialog Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-purple-500 transition">
                        <ArrowRight className="w-5 h-5 text-black hover:text-white" />
                      </button>
                    </DialogTrigger>

                    <DialogContent
                      showCloseButton={false}
                      className="max-w-lg bg-black text-white"
                    >
                      <DialogHeader>
                        <DialogTitle>{about.title}</DialogTitle>
                        <DialogDescription className="text-md leading-7 mt-3 text-white/80">
                          {about.description}
                        </DialogDescription>
                      </DialogHeader>

                      {/* Show info fields */}
                      <div className="mt-6 space-y-2">
                        {about.info.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-white/60">
                              {item.fieldName}:
                            </span>
                            <span className="font-medium">
                              {item.fieldValue}
                            </span>
                          </div>
                        ))}
                      </div>

                      <DialogFooter className="mt-4">
                        <DialogClose asChild>
                          <Button variant="outline">Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
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
