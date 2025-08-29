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
         {/* Text */}
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-2 xl:order-none max-w-2xl">
            <span className="text-xl font-medium text-purple-400 animate-fade-in-up">
              Web Developer
            </span>
            <h1 className="h1 mt-2 mb-4 animate-fade-in-up delay-100">
              Hello I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Elisha Jameel
              </span>
            </h1>
            <p className="max-w-[500px] text-white/80 leading-relaxed mb-6 animate-fade-in-up delay-200">
              I excel at crafting elegant digital experiences, and I am proficient
              in various programming languages and technologies.
            </p>

            {/* btn and socials */}
            <div className="flex cursor-pointer flex-col lg:flex-row items-center gap-6">
              <div className="group">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase border-2 group-hover:transition-all duration-300 group-hover:bg-[#a238ff] flex items-center gap-2"
                >
                  <a href="/Elisha-Jameel.docx" download>
                    <span className="hover:transition-all duration-300 group-hover:text-white">
                      Download CV
                    </span>
                    <FiDownload className="hover:transition-all duration-300 group-hover:text-white text-xl ml-2 inline" />
                  </a>
                </Button>
              </div>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-13 h-13 text-xl border-2 border-[#a238ff] rounded-full hover:transition-all duration-300 flex justify-center items-center text-[#a238ff] hover:bg-[#a238ff] text-base hover:text-white"
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
