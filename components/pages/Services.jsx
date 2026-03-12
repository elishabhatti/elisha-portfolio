"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "I build fast, scalable web applications using modern technologies like MERN stack and Next.js. My focus is clean architecture, performance, and production-ready code.",
    icons: [SiReact, SiNextdotjs, SiNodedotjs],
  },
  {
    num: "02",
    title: "Modern UI Engineering",
    description:
      "I design and develop beautiful, interactive user interfaces with smooth animations, responsive layouts, and pixel-perfect attention to detail.",
    icons: [SiReact, SiTailwindcss],
  },
  {
    num: "03",
    title: "Performance Optimization",
    description:
      "I optimize websites for speed, accessibility, and SEO fundamentals using best practices like code splitting, caching strategies, and modern frameworks.",
    icons: [SiNextdotjs, SiTailwindcss],
  },
];

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

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-32 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[65vw] h-[40vh]"
        style={{
          background: "radial-gradient(circle, #725afe33, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-center text-4xl md:text-5xl font-bold mb-24"
        >
          Services
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative border border-white/10 rounded-xl p-10 transition-all duration-500 hover:border-[#725afe] hover:bg-white/[0.03]"
            >
              {/* Number */}
              <span className="text-6xl font-extrabold text-white/10 group-hover:text-[#725afe] transition duration-500">
                {service.num}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-6 mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed text-sm mb-8">
                {service.description}
              </p>

              {/* Tech Icons */}
              <div className="flex gap-5 mb-10 text-xl text-white/60">
                {service.icons.map((Icon, i) => (
                  <Icon
                    key={i}
                    className="transition duration-300 group-hover:text-[#725afe] group-hover:scale-110"
                  />
                ))}
              </div>

              {/* Arrow */}
              <a
                href="#contact"
                className="absolute bottom-8 right-8 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 group-hover:bg-[#725afe] group-hover:text-white group-hover:rotate-45"
              >
                <BsArrowUpRight />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
