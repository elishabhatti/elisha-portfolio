import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 pt-6 lg:gap-24 lg:pt-6 pb-14">
          {/* text */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6 order-2 lg:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-[#00ff99]">Elisha Jameel</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80 leading-relaxed">
              I excel crafting elegant digital experiences and I am proficient
              in various programming languages and technologies.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="uppercase hover:text-[#1C1C22] flex items-center gap-2"
              >
                <a href="/Elisha-Jameel.docx" download>
                <span>Download CV</span>
                <FiDownload className="text-xl ml-2 inline" />
                </a>
              </Button>

              <Social
                containerStyles="flex gap-6"
                iconStyles="w-10 h-10 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>

          {/* photo */}
          <div className="order-1 lg:order-none mb-4 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex items-center">
        <Stats />
      </div>
    </section>
  );
};

export default page;
