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
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam deleniti magnam quam officiis sint reprehenderit fugiat.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Academy",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development",
      position: "Junior Developer",
      duration: "2017 - 2018",
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
    {
      icon: <FiFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
