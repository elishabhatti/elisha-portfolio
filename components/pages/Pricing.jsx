"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import pricing from "../../json/pricing.json";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function Pricing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-white px-4 sm:px-6 lg:px-12 py-10"
    >
      <div className="flex justify-center items-center flex-col container mx-auto">
        <h2
          id="pricing"
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Pricing Plans
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 place-items-center w-full">
          {pricing.map((plan) => (
            <Card
              key={plan.num}
              className="w-full max-w-[320px] bg-[#0a0a0a] text-white border border-gray-700 hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 rounded-2xl"
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-semibold">
                  {plan.title}
                </CardTitle>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <p className="text-2xl font-bold mb-4 text-indigo-400">
                  {plan.pkrPrice}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex gap-2 sm:gap-3 leading-6 text-sm sm:text-base text-white/70"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="block">
                  <InteractiveHoverButton className="w-full text-black text-center py-2 sm:py-3 text-sm sm:text-base rounded-xl">
                    Get Started <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 inline" />
                  </InteractiveHoverButton>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
