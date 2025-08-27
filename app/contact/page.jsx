"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
    description: "KDA TP-2 Mehmoodabad No.2 Karachi Street 7",
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

  // handle change for text/textarea inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/submit", formData);
      console.log(response);

      if (response.data.status === 201) {
        toast.success(response.data.message);
        // reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submit failed:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.5, ease: "easeInOut" },
      }}
      className="py-12 px-4 md:px-8 xl:px-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* form */}
          <div className="w-full lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col border-2 border-white/30 gap-6 p-8 md:p-10 bg-black rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl md:text-4xl font-semibold primary-text-color text-center">
                Let's work together
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-center">
                Feel free to reach out with your project details or inquiries.
                I'll get back to you as soon as possible!
              </p>

              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* select */}
              <Select
                value={formData.service}
                onValueChange={(val) =>
                  setFormData({ ...formData, service: val })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                name="message"
                className="h-[180px] md:h-[200px]"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
              />

              {/* button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:max-w-[250px] font-medium"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          {/* info   */}
          <div className="w-full xl:w-1/3">
            <ul className="flex flex-col gap-3">
              {info.map((item, index) => (
                <li key={index} className="flex  gap-5">
                  {/* icon */}
                  <div className="text-lg w-[45px] h-[45px] border-2 border-white/50 p-3 rounded-lg primary-text-color">
                    {item.icon}
                  </div>
                  {/* text */}
                  <div className="flex flex-col">
                    <p className="text-md text-white/70">{item.title}</p>
                    <h3 className="xl:text-lg text-sm font-bold">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
