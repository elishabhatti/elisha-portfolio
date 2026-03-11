import { CircleHelp } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { FiDownload } from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import Image from "next/image";

const About = () => {
  return (
    <section className="min-h-[90vh] bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h2
        id="about"
        className="text-white text-3xl md:text-4xl font-bold text-center mb-12  py-20"
      >
        About Me
      </h2>
      {/* Container fix: added items-center to keep both sides vertically aligned */}
      <div>
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 items-center">
          {/* LEFT SECTION */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#725afe] font-semibold">
              <span className="text-[#725afe] text-2xl">✦</span>
              <span className="uppercase tracking-[0.3em] text-xs">
                About Me
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter">
              Passionate <br />
              <span className="text-zinc-500 font-medium">MERN Stack Dev.</span>
            </h1>

            {/* Adjusted max-width for better readability */}
            <p className="text-zinc-400 text-lg md:text-xl max-w-full leading-relaxed font-light">
              I’m a full-stack developer focused on building modern web
              applications using the MERN stack and Next.js. I enjoy building
              scalable systems with clean UI and polished user experiences.
            </p>

            <div className="pt-4">
              <a href="/Elisha-Jameel.docx" download className="inline-block">
                <InteractiveHoverButton>
                  <span className="text-black group-hover:text-white">
                    Download CV
                  </span>
                  <FiDownload className="transition-all duration-300 group-hover:text-white text-xl ml-2 inline" />
                </InteractiveHoverButton>
              </a>
            </div>
          </div>

          {/* RIGHT SECTION */}
          {/* Alignment fix: justify-self-center ensures the card is centered on mobile */}
          <div className="flex justify-center md:justify-end w-full">
            <Card className="bg-black w-full max-w-105 border p-0 text-center border-zinc-800 text-white overflow-hidden hover:shadow-[0_0_30px_rgba(114,90,254,0.25)] transition-all duration-500">
              {/* Placeholder for Profile Image */}
              <div className="w-full bg-zinc-900 border-b border-zinc-800 flex items-center justify-center">
                <Image
                  src="/images/photo.jpeg"
                  alt="Elisha Jameel"
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover border-b border-zinc-800"
                  priority
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Elisha Jameel
                </CardTitle>
                <CardDescription className="text-zinc-400 text-md">
                  MERN Stack & Next.js Developer
                </CardDescription>
              </CardHeader>

              <div className="border-b border-zinc-800 mx-6"></div>

              <CardFooter className="py-6">
                <div className="flex gap-4 w-full text-xl items-center justify-center">
                  <a
                    href="#"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsInstagram />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-zinc-900 hover:bg-[#725afe] hover:text-white transition-all cursor-pointer"
                  >
                    <BsFacebook />
                  </a>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
