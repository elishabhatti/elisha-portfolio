"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingPlansPKR = [
  {
    num: "01",
    title: "Web Development",
    description: "Modern, responsive websites — from simple to full-stack.",
    price: "PKR 75,000",
    features: [
      "Responsive Design",
      "Frontend + Backend",
      "1 Month Free Support",
      "SEO Optimization",
    ],
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces focusing on usability.",
    price: "PKR 50,000",
    features: [
      "Wireframes & Mockups",
      "High-Fidelity Design",
      "Interactive Prototypes",
      "Custom Revisions",
    ],
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Unique, memorable logos representing your brand.",
    price: "PKR 20,000",
    features: [
      "3 Initial Concepts",
      "Unlimited Revisions",
      "High-Resolution Files",
      "Source Files Included",
    ],
  },
  {
    num: "04",
    title: "SEO Services",
    description: "Boost your visibility with best-practice SEO.",
    price: "PKR 40,000/month",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Monthly Reports",
    ],
  },
];

export default function Pricing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-white"
    >
      <div className="flex justify-center items-center flex-col container mx-auto px-6">
        <h2 id="pricing" className="text-3xl md:text-5xl font-bold text-center mb-12">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlansPKR.map((plan) => (
            <Card
              key={plan.num}
              className="bg-black text-white border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="xl:text-xl text-lg">
                  {plan.title}
                </CardTitle>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <p className="xl:text-3xl text-xl font-bold mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base md:text-md lg:text-lg xl:text-1xl"
                    >
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
