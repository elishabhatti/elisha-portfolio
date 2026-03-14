"use client";

import Footer from "@/components/Footer";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import Projects from "@/components/pages/Projects";
import Resume from "@/components/pages/Resume";
import Services from "@/components/pages/Services";

const page = () => {
  return (
    <section>
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
        <Footer />
      </section>
    </section>
  );
};

export default page;
