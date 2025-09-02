import CountUp from "react-countup";
import { motion } from "framer-motion";
import stats from "../json/stats.json";

const Stats = () => {
  return (
    <section className="pt-2 pb-6 xl:pt-10 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2  gap-6 xl:gap-16 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={3}
                  delay={1}
                  className="text-4xl xl:text-3xl font-extrabold"
                />
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, delay: 0.2 }}
                  transition={{ duration: 0.69 }}
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
