"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build fast, responsive, and scalable websites using modern technologies. From simple landing pages to full-stack web applications, I turn ideas into functional digital products.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design clean and user-friendly interfaces that provide smooth experiences. My focus is on blending creativity with usability to make designs that users love.",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I create unique and professional logos that reflect your brand identity. My goal is to design something simple, memorable, and impactful.",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I help improve your website’s visibility on search engines through SEO best practices, ensuring your content reaches the right audience and ranks higher.",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col justify-center  xl:px-16 xl:py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Services
      </h2>
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[50px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex-1 flex flex-col justify-center gap-6"
            >
              {/* top row */}
              <div className="w-full flex justify-between items-center">
                <div className="xl:text-5xl text-4xl font-extrabold text-outline text-transparent transition-all duration-500">
                  {service.num}
                </div>

                {/* Dialog for full details */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="xl:w-[60px] xl:h-[60px] w-[40px] h-[40px] rounded-full bg-white group hover:bg-[#a238ff] transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary transition-all xl:text-3xl text-2xl group-hover:text-white" />
                    </button>
                  </DialogTrigger>

                  <DialogContent
                    showCloseButton={false}
                    className="max-w-lg bg-black"
                  >
                    <DialogHeader>
                      <DialogTitle className="xl:text-xl text-lg font-bold">
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="xl:text-lg text-md text-base xl:leading-7 leading-6 text-white/80">
                        {service.description}
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

              {/* heading */}
              <h2 className="xl:text-[32px] text-[22px] font-bold leading-none text-white hover:primary-text-color transition-all duration-500">
                {service.title}
              </h2>

              {/* short description */}
              <p className="text-white/60 xl:text-lg text-md leading-7">
                {service.description.length >= 100
                  ? service.description.slice(0, 100) + "..."
                  : service.description}
              </p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
