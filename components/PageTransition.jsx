"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          className="h-screen w-full fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          exit={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
