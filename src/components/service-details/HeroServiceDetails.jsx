import React from "react";

const HeroServiceDetails = () => {
  return (
    <div className="relative mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center items-center">
      <span className="border_ pb-24">
        <h3 className="subTitle">DEVELOPMENT</h3>
        <h1 className="font-bold pt-3 pb-6 text-3xl md:text-4xl">
          Solve your company's <br /> repetitive problems by designing apps
        </h1>
      </span>

      {/* gradient start */}
      <div className="absolute z-[-1] w-[100%] h-[100%] sm:top-0 -left-full orange-gradient blur-[300px]" />
      <div className="absolute z-[-2] w-[40%] h-[70%] sm:bottom-40 green-gradient blur-[200px]" />
      <div className="absolute z-[-1] w-[100%] h-[100%] sm:-right-[0] 2xl:-right-[50%] bottom-20 red-gradient blur-[300px]" />
      {/* gradient end */}
    </div>
  );
};

export default HeroServiceDetails;
