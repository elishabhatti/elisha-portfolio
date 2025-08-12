"use client";

import CountUp from "react-countup";

const stats = [
  { num: 12, text: "Years of Experience" },
  { num: 26, text: "Project Completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((item, index) => {
            return (
              <div key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-3xl font-extrabold"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
