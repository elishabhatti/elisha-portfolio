import { Button } from "@/components/ui/button";
import { FiDownLoad } from "react-icons/fi";

const page = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Web Developer</span>
            <h1 className="h1">
              Hello I,m <br /> <span>Elisha Jameel</span>
            </h1>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default page;
