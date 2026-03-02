"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background Waves */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/waves.png"
          alt="waves background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Left Accent Line */}
      <div className="absolute left-10 top-1/3 h-32 w-px bg-white/20 z-10" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center h-screen px-8 md:px-20">

        {/* CREATIVE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] leading-none font-extrabold tracking-tight"
        >
          CREATIVE
        </motion.h1>

        {/* DEVELOPER + Name */}
        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[12vw] leading-none font-extrabold tracking-tight text-white/15"
          >
            DEVELOPER
          </motion.h1>

          {/* Name aligned perfectly to R */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-5 right-0 text-xs tracking-widest text-white/60"
          >
            Elisha Jameel / Web Developer
          </motion.p>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-px bg-white/10 my-12" />

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/50 text-xs tracking-widest uppercase mb-4"
        >
          // SCALABLE WEB SOLUTIONS
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="max-w-xl text-white/60 text-sm leading-relaxed"
        >
          Full-stack developer and creative thinker driven by passion for
          building modern, scalable, and high-performance web applications.
        </motion.p>

        {/* Explore Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-3 mt-8 text-sm text-white/70 cursor-pointer hover:text-white transition-all duration-300"
        >
          <span className="tracking-widest uppercase">
            Explore My Work
          </span>
          <ArrowDown size={16} />
        </motion.div>

      </div>
    </section>
  );
};

export default Home;

// <motion.section
//   initial={{ opacity: 0, y: 50 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, ease: "easeOut" }}
//   viewport={{ once: true, amount: 0.2 }}
//   className="w-full pb-15"
// >
//   <div id="home" className="container ">
//     <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 pt-6 lg:gap-24 lg:pt-6 pb-14">
//       {/* Text */}
//       <div className="text-left flex flex-col p-5 items-center xl:items-start order-2 xl:order-none max-w-2xl">
//         <motion.span
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1, delay: 0.2 }}
//           transition={{ duration: 0.69 }}
//         ></motion.span>
//         <motion.h1
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1, delay: 0.2 }}
//           transition={{ duration: 0.69 }}
//           className="h1 mt-2 mb-4  text-white"
//         >
//           Hello I'm <br />
//           <motion.span
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1, delay: 0.2 }}
//             transition={{ duration: 0.69 }}
//             className="text-transparent inline-block bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
//           >
//             Elisha Jameel
//           </motion.span>
//         </motion.h1>
//         <motion.h3 className="h3 mb-5">
//           <motion.span
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1, delay: 0.2 }}
//             transition={{ duration: 0.69 }}
//           >
//             <FlipWords className="text-white" words={words} />
//           </motion.span>
//         </motion.h3>
//         <motion.p
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1, delay: 0.2 }}
//           transition={{ duration: 0.69 }}
//           className="max-w-[500px] text-white/80 leading-relaxed mb-6 "
//         >
//           I excel at crafting elegant digital experiences, and I am
//           proficient in various programming languages and technologies.
//         </motion.p>
//         {/* btn and socials */}
//         <div className="flex cursor-pointer flex-col lg:flex-row items-center gap-6">
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1, delay: 0.2 }}
//             transition={{ duration: 0.69 }}
//             className="group"
//           >
//             <InteractiveHoverButton>
//               <a href="/Elisha-Jameel.docx" download>
//                 <span className="text-black group-hover:text-white">
//                   Download CV
//                 </span>
//                 <FiDownload className="hover:transition-all duration-300 group-hover:text-white text-xl ml-2 inline" />
//               </a>
//             </InteractiveHoverButton>
//           </motion.div>
//           <Social
//             containerStyles="flex gap-6"
//             iconStyles="w-13 h-13 text-xl border-2 border-white rounded-full hover:transition-all duration-300 flex justify-center items-center text-white hover:bg-[#a238ff] text-base hover:text-white"
//           />
//         </div>
//       </div>

//     </div>
//   </div>
//   <div className="w-full justify-center flex items-center">
//     <Stats />
//   </div>
// </motion.section>
