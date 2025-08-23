"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build fast, responsive, and scalable websites using modern technologies. From simple landing pages to full-stack web applications, I turn ideas into functional digital products.",
    price: "$499",
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
    description:
      "I design clean and user-friendly interfaces that provide smooth experiences. My focus is on blending creativity with usability to make designs that users love.",
    price: "$299",
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
    description:
      "I create unique and professional logos that reflect your brand identity. My goal is to design something simple, memorable, and impactful.",
    price: "$99",
    features: [
      "3 Initial Concepts",
      "Unlimited Revisions",
      "High-Resolution Files",
      "Source Files Included",
    ],
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I help improve your website’s visibility on search engines through SEO best practices, ensuring your content reaches the right audience and ranks higher.",
    price: "$199",
    features: [
      "Keyword Research",
      "On-page SEO",
      "Technical SEO",
      "Monthly Reports",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.num}
              className="bg-gray-800 text-white border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
