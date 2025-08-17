"use client";

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
    description: "KDA TP-2 Mehmoodabad Karachi Street 7",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div>
          {/* form */}
          <div>
            <form>form</form>
          </div>
          {/* info */}
        </div>
      </div>
    </motion.section>
  ) 
};

export default Contact;
