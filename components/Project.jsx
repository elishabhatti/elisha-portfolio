import { MoveRight } from "lucide-react";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
        {/* LEFT SIDE (hover here only) */}
        <div
          className="flex-1"
          onMouseEnter={() => setPreview(image)}
          onMouseLeave={() => setPreview(null)}
        >
          <p className="text-white text-xl md:text-2xl font-semibold">
            {title}
          </p>
          <div className="flex flex-wrap gap-2 mt-2 text-sm text-[#f4e1c1]">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-neutral-800 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (button area, no preview trigger) */}
        <InteractiveHoverButton onClick={() => setIsHidden(true)}>
          Read More
          <MoveRight className="w-5 inline ml-3" />
        </InteractiveHoverButton>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
