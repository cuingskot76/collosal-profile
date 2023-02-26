import { motion as m, useIsPresent } from "framer-motion";
import React from "react";

const Transition = ({ children }) => {
  const isPresent = useIsPresent();
  console.log(children);
  return (
    <m.div
      initial={{ scaleX: 1 }}
      animate={{
        scaleX: 0,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
      style={{ originX: isPresent ? 0 : 1 }}
      className="privacy-screen"
    >
      {children}
    </m.div>
  );
};

export default Transition;
