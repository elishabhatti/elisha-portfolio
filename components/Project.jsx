import { MoveRight } from "lucide-react";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";

const Project = ({ title, description, subDescription, href, image, tags }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div className="py-10 flex-wrap items-center justify-between sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">title</p>
          <div className="flex gap-4 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <MoveRight className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 h-[1px] w-full" />
      {isHidden &&
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      }
    </>
  );
};

export default Project;
