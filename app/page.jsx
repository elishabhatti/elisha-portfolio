"use client";

import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import Pricing from "@/components/pages/Pricing";
import Resume from "@/components/pages/Resume";
import Services from "@/components/pages/Services";
import Work from "@/components/pages/Work";

const page = () => {
  return (
    <section className="pt-25">
      <section>
        <Home />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Resume />
      </section>
      <section>
        <Work />
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
