"use client";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-[#000000]">
      <div className="absolute bottom-0 left-0 w-full h-[55vh] pointer-events-none">
        {/* The Base Purple Gradient */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background:
              "linear-gradient(to top, #5e35b1 0%, #4527a0 20%, transparent 100%)",
            filter: "blur(90px)",
          }}
        />
        {/* The Brighter Horizontal Core */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[40%] opacity-80"
          style={{
            background:
              "radial-gradient(50% 100% at 50% 100%, #7c4dff 0%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl">
        {/* Main Heading: Matched to the large, clean scale in the photo */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[7vw] leading-[1.1]  font-medium tracking-tight mb-8"
        >
          Creative & <br />
          Experienced Web <br />
          Developer
        </motion.h1>

        {/* Subtext: Wide, small, and slightly dimmed */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-xs md:text-[15px] max-w-3xl leading-relaxed mb-12 px-10 opacity-60 font-light"
        >
          Experience the synergy of innovation and expertise with our web
          development team. From intuitive interfaces to robust backend systems,
          we are committed to delivering unmatched results for your digital
          projects.
        </motion.p>

        {/* Buttons: Clean, pill-shaped, translucent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-row items-center justify-center gap-5"
        >
          <button className="px-10 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md text-[13px] font-medium">
            Explore
          </button>
          <button className="px-10 py-2.5 rounded-full text-gray-300 hover:text-white transition-colors text-[13px] font-medium">
            Contact Now
          </button>
        </motion.div>
      </div>

      {/* Subtle top-down fade to keep the top half pitch black */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#020109] to-transparent pointer-events-none" />
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
