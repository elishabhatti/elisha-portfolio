"use client";
import { motion } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/50">
      <motion.div
        className="relative w-full max-w-xl max-h-[80vh] overflow-y-auto border shadow-lg rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-md top-5 right-5 bg-neutral-900 hover:bg-neutral-700"
        >
          <img src="assets/close.svg" alt="close" className="w-6 h-6" />
        </button>

        {/* Image */}
        <img src={image} alt={title} className="w-full" />

        {/* Content */}
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-4 text-neutral-300">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-white bg-neutral-800 rounded-md hover:scale-110 transition"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>

            {/* Link */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-white hover:text-purple-400 transition"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
