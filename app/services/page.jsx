"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build fast, responsive, and scalable websites using modern technologies. From simple landing pages to full-stack web applications, I turn ideas into functional digital products.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design clean and user-friendly interfaces that provide smooth experiences. My focus is on blending creativity with usability to make designs that users love.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I create unique and professional logos that reflect your brand identity. My goal is to design something simple, memorable, and impactful.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I help improve your website’s visibility on search engines through SEO best practices, ensuring your content reaches the right audience and ranks higher.",
    href: "",
  },
];


const Services = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center p-4 xl:px-16 xl:py-10 ">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[50px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.2, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6"
              >
                {/* to */}
                <div className="w-full flex justify-between items-center">
                  <div className="xl:text-5xl text-4xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] rounded-full bg-white group hover:bg-[#a238ff]  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary transition-all xl:text-3xl text-2xl group-hover:text-white" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="xl:text-[32px] text-[22px] font-bold leading-none text-white hover:primary-text-color transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 xl:text-lg text-md leading-7">
                  {service.description.length >= 30 ? service.description.slice(0, 100) + "..."  : service.description }
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
