import React from "react";
import { works1, works2, works3 } from "../../constant";

const HeroWorks = () => {
  return (
    <div className="relative my-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center items-center">
      <span className="border_ pb-24">
        <h3 className="subTitle">HOW WE WORK</h3>
        <h1 className="font-bold pt-3 pb-6 text-3xl md:text-4xl">
          We have a workflow that <br /> allows the job to be delivered well
        </h1>
      </span>

      {/* gradient start */}
      <div className="hidden sm:block absolute z-[-1] w-[100%] h-[100%] sm:top-0 -left-full orange-gradient blur-[300px]" />
      <div className="hidden sm:block absolute z-[-2] w-[40%] h-[70%] sm:bottom-40 green-gradient blur-[200px]" />
      <div className="hidden sm:block absolute z-[-1] w-[100%] h-[100%] sm:-right-[0] 2xl:-right-[50%] bottom-20 red-gradient blur-[300px]" />
      {/* gradient end */}
    </div>
  );
};

export default HeroWorks;
