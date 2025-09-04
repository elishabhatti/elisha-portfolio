"use client";

import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import Pricing from "@/components/pages/Pricing";
import Projects from "@/components/pages/Projects";
import Resume from "@/components/pages/Resume";
import Services from "@/components/pages/Services";
import About from "@/components/pages/About";

const page = () => {
  return (
    <section className="pt-25 max-w-8xl">
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Resume />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Pricing />
      </section>
    </section>
  );
};

export default page;
