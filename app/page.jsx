import { Button } from "@/components/ui/button";
import { FiDownLoad } from "react-icons/fi";

const page = () => {
  return (
    <section className="w-full container">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I,m <br />{" "}
              <span className="text-green-300">Elisha Jameel</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel crafting elegant digital experience and i am proficient in
              various programming languages and technologies
            </p>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default page;
