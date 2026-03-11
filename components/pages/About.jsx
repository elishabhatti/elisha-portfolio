import { CircleHelpIcon } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen text-white bg-black w-full flex flex-wrap justify-center items-center">
      {/* Left Side */}
      <div className="">
        <h1>
          <CircleHelpIcon /> About Me
        </h1>
        <h1>Passionate MERN STACK DEVElOPER</h1>
        <p>
          I’m a full-stack developer focused on building modern web applications
          using the MERN stack and Next.js. I enjoy creating systems that are
          not just visually appealing but also secure and scalable.
        </p>
        <div>
          <a href="/Elisha-Jameel.docx" download>
            <InteractiveHoverButton>
              <span className="text-black group-hover:text-white">
                Download CV
              </span>
              <FiDownload className="transition-all duration-300 group-hover:text-white text-xl ml-2 inline" />
            </InteractiveHoverButton>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-black text-white">
          <div className="absolute inset-0 z-30 aspect-video bg-black" />
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardTitle>Elisha Jameel</CardTitle>
            <CardDescription>MERN STACK, Next.js Developer</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-[#725afe]">View Event</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default About;
