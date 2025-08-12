import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center xl:items-center justify-center gap-6 pt-6  xl:gap-24 xl:pt-6 pb-14">
          {/* text */}
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start gap-6 order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-green-300">Elisha Jameel</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80 leading-relaxed">
              I excel crafting elegant digital experiences and I am proficient
              in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="uppercase hover:text-[#1C1C22]  flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-green-300 rounded-full flex justify-center items-center text-green-300 text-base hover:bg-green-600 hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
