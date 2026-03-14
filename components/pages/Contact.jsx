"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 309 2772847",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "elishajameel270@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "KDA TP-2 Mehmoodabad, Karachi",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submit", formData);
      if (response.data.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-16 px-6 md:px-24 bg-[#050505] overflow-hidden"
    >
      {/* 1. Header Anchor (Bright White) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-24 text-center"
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          Contact
        </h2>
        <div className="h-1 w-12 bg-[#725afe] mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- REFINED SUB-HEADER --- */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12">
          <div className="space-y-2">
            <p className="text-[#725afe] font-mono text-[11px] tracking-[0.4em] uppercase font-bold">
              Inquiry
            </p>
            <h3 className="text-white text-3xl md:text-5xl font-semibold tracking-tight">
              Let's{" "}
              <span className="italic font-mono text-[#725afe]">Connect.</span>
            </h3>
          </div>
          <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] mt-4 md:mt-0">
            Available 2026 // Worldwide
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          {/* --- FORM SIDE (With Light Border) --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            {/* Added a subtle border and slightly brighter background for the form container */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-10 p-8 md:p-12 border border-white/10 bg-white/[0.02] rounded-[2rem]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                {/* Placeholder color changed to zinc-500 for better visibility */}
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/20 border-x-0 border-t-0 rounded-none h-10 focus-visible:ring-0 focus:border-[#725afe] text-white text-sm px-0 transition-all placeholder:text-zinc-500"
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/20 border-x-0 border-t-0 rounded-none h-10 focus-visible:ring-0 focus:border-[#725afe] text-white text-sm px-0 transition-all placeholder:text-zinc-500"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/20 border-x-0 border-t-0 rounded-none h-10 focus-visible:ring-0 focus:border-[#725afe] text-white text-sm px-0 transition-all placeholder:text-zinc-500"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/20 border-x-0 border-t-0 rounded-none h-10 focus-visible:ring-0 focus:border-[#725afe] text-white text-sm px-0 transition-all placeholder:text-zinc-500"
                />
              </div>

              <Select
                value={formData.service}
                onValueChange={(val) =>
                  setFormData({ ...formData, service: val })
                }
              >
                <SelectTrigger className="bg-transparent border-b border-white/20 border-x-0 border-t-0 rounded-none h-10 text-white text-xs px-0 focus:ring-0 uppercase tracking-widest">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent className="bg-[#0f0f0f] border-white/10 text-white">
                  <SelectGroup>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="seo">Optimization</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="bg-white/[0.03] border border-white/20 rounded-xl min-h-[150px] p-6 focus-visible:ring-0 focus:border-[#725afe] text-white text-sm transition-all placeholder:text-zinc-500"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
              />

              <div className="pt-2">
                <InteractiveHoverButton
                  type="submit"
                  className="w-full md:w-auto px-10 h-12 text-xs uppercase tracking-widest font-bold"
                >
                  Send Message
                </InteractiveHoverButton>
              </div>
            </form>
          </motion.div>

          {/* --- INFO SIDE (Higher Contrast) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-[320px] flex flex-col gap-12 pt-8"
          >
            <div className="space-y-12">
              {info.map((item, index) => (
                <div key={index} className="group">
                  <p className="text-[#725afe] font-mono text-[10px] uppercase tracking-[0.4em] mb-3 font-bold">
                    {item.title}
                  </p>
                  <h3 className="text-zinc-200 text-lg font-normal group-hover:text-white transition-colors duration-500 leading-relaxed">
                    {item.description}
                  </h3>
                </div>
              ))}
            </div>

            {/* Availability Box */}
            <div className="mt-4 p-8 border border-white/10 bg-white/[0.01] rounded-3xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                  Available for Work
                </span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Looking for a reliable developer? Let's turn your ideas into a
                high-performance reality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
