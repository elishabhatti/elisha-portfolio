"use client";

import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import Pricing from "@/components/pages/Pricing";
import Resume from "@/components/pages/Resume";
import Services from "@/components/pages/Services";
import Work from "@/components/pages/Work";

const page = () => {
  return (
    <section>
      <section id="home" className="min-h-screen pt-30">
        <Home />
      </section>
      <section id="services" className="min-h-screen">
        <Services />
      </section>
      <section id="resume" className="min-h-screen ">
        <Resume />
      </section>
      <section id="work" className="min-h-screen ">
        <Work />
      </section>
      <section id="contact" className="min-h-screen ">
        <Contact />
      </section>
      <section id="pricing" className="min-h-screen ">
        <Pricing />
      </section>
    </section>
  );
};

export default page;
