import { myProjects } from "@/constant";
import Project from "../Project";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen px-6 md:px-12 py-20 mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">My Selected Projects</h2>

      <div className="mt-12 space-y-10">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg pointer-events-none w-80 shadow-lg"
          style={{ x: springX, y: springY }}
          src={preview}
        />
      )}
    </motion.section>
  );
};

export default Projects;
