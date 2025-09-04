"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import pricing from "../../json/pricing.json"


export default function Pricing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-white xl:p-15 p-5"
    >
      <div className="flex justify-center items-center flex-col container mx-auto px-6">
        <h2 id="pricing" className="text-white text-3xl md:text-5xl font-bold text-center mb-12">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricing.map((plan) => (
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
