import React from "react";
import { features } from "../../constant";

import { motion as m } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.3 } },
};

const Features = () => {
  return (
    <div className="mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
      <div className="overflow-hidden">
        <m.div
          className="md:flex justify-center gap-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {features?.map((feature, index) => (
            <m.div
              key={index}
              className="mb-5 bg-light md:w-[320px] rounded-sm px-5 py-4"
              variants={item}
              transition={{ delay: 1 }}
            >
              <img src={feature.url} alt={feature.title} />
              <h4 className="mt-2 mb-5 md:mb-7 text-xl font-bold">
                {feature.title}
              </h4>
              <p className="muted">{feature.description}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  );
};

export default Features;
