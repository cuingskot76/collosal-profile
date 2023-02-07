import React from "react";

const Callout = () => {
  return (
    <div className="mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem] md:flex items-center justify-between">
      <p className="font-bold text-2xl text-center md:text-3xl md:max-w-md">
        We've prepared everything, it's time for you to tell the problem
      </p>
      <div className="gap-5 flex md:gap-6 items-center justify-center">
        <button className="button-color py-3 px-5">Send Quote</button>
        <button className="button py-3 px-5">Ask Us</button>
      </div>
    </div>
  );
};

export default Callout;
