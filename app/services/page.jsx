"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tenetur  dolor sit, Eaque tenetur",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tenetur dolor sit, Eaque tenetur",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tenetur dolor sit, Eaque tenetur",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tenetur dolor sit, Eaque tenetur",
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
                className="flex-1 flex flex-col justify-center gap-6 group"
              > 
                {/* to */}
                <div className="w-full flex justify-between items-center">
                  <div className="xl:text-5xl text-4xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] rounded-full bg-white hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary xl:text-3xl text-2xl " />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="xl:text-[42px] text-[22px] font-bold leading-none text-white hover:text-[#00ff99] transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 xl:text-lg text-md leading-7">
                  {service.description}
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
