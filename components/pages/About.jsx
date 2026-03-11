import { CircleHelpIcon } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Left Side */}
      <div>
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
      <div></div>
    </div>
  );
};

export default About;
