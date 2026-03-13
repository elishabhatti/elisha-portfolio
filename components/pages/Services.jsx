"use client";

import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiExpress, SiMongodb, SiFigma,
} from "react-icons/si";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description: "I build fast, scalable web applications using modern technologies like MERN and Next.js. Clean architecture meets production-ready performance.",
    icons: [SiMongodb, SiReact, SiNodedotjs, SiExpress, SiNextdotjs],
  },
  {
    num: "02",
    title: "Modern UI Engineering",
    description: "Designing interactive user interfaces with smooth animations and pixel-perfect attention to detail. Beauty meets functionality.",
    icons: [SiReact, SiTailwindcss, SiFigma],
  },
  {
    num: "03",
    title: "Performance Optimization",
    description: "Speed is a feature. I optimize for Core Web Vitals, SEO, and accessibility using advanced caching and code-splitting.",
    icons: [SiNextdotjs, SiTailwindcss],
  },
];

const ServiceCard = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const background = useMotionTemplate`
    radial-gradient(
      350px circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])},
      rgba(114, 90, 254, 0.25),
      transparent 80%
    )
  `;

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 overflow-hidden cursor-pointer"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{ background }}
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center">
          <span className="text-5xl font-black text-white/10 group-hover:text-[#725afe]/40 transition-all duration-500">
            {service.num}
          </span>
          <div className="p-3 rounded-full bg-white/10 border border-white/20 group-hover:bg-[#725afe] group-hover:text-white transition-all duration-500 group-hover:rotate-45 shadow-lg">
            <BsArrowUpRight className="text-lg" />
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-6 text-white group-hover:text-[#725afe] transition-colors tracking-tight">
          {service.title}
        </h3>
        
        <p className="mt-3 text-white/90 leading-relaxed text-sm font-normal">
          {service.description}
        </p>

        <div className="mt-8 flex gap-5">
          {service.icons.map((Icon, i) => (
            <Icon key={i} className="text-xl text-white/60 group-hover:text-white group-hover:scale-125 transition-all duration-300" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section 
      id="services" 
      className="relative w-full min-h-screen flex flex-col items-center py-24 px-6 bg-[#030303] overflow-hidden"
    >
      {/* --- TOP HEADING ANCHOR --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-20 text-center"
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          Services
        </h2>
        <div className="h-1 w-12 bg-[#725afe] mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/4 -left-10 w-[400px] h-[400px] bg-[#725afe]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full my-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]"
            >
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#725afe] to-blue-400">Excellence.</span>
            </motion.h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:max-w-xs"
          >
            <p className="text-white/80 text-sm md:text-base border-l-2 border-[#725afe] pl-6 py-2 leading-relaxed">
              Clean code, immersive UI, and high-performance logic—all in one place.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;