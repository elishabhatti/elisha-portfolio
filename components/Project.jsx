import { MoveRight } from "lucide-react";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";

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
      <div
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4"
      >
        {/* Project Info */}
        <div>
          <p className="text-white text-xl md:text-2xl font-semibold">{title}</p>
          <div className="flex flex-wrap gap-2 mt-2 text-sm text-[#f4e1c1]">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-neutral-800 rounded-md"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition"
        >
          Read More
          <MoveRight className="w-5" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

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
