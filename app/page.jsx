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
      <section id="home" className="pt-30">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </section>
  );
};

export default page;
