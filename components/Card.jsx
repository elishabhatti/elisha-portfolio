import { motion } from "framer-motion";

const Card = ({ style, text, image, containerRef }) => {
  return (
    <>
      <motion.img
        whileHover={{ scale: 1.05 }}
        className="absolute z-10 w-12 "
        src={image}
        style={style}
        drag
        dragConstraints={containerRef}
      />
      <motion.div
        drag
        whileHover={{ scale: 1.05 }}
        dragConstraints={containerRef}
        style={style}
        className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extrabold bg-[#262847] w-[12rem] cursor-grab"
      >
        <p>{text}</p>
      </motion.div>
    </>
  );
};
export default Card;
