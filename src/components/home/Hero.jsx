import React from "react";

const Hero = () => {
  return (
    <div className="relative mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center items-center">
      <h3 className="subTitle">CLIENT-DEVELOPMENT DRIVEN</h3>
      <h1 className="font-bold pt-3 pb-6 text-3xl md:text-4xl">
        We Design. We Develop. We Ship. In The Same Day.
      </h1>
      <p className="muted">
        We are committed to not making clients wait. We will deliver the work as
        quickly as possible. Even on the same day. Even so, we do not reduce the
        quality of our work.
      </p>
      <div className="gap-5 flex mt-10 md:gap-6">
        <button className="button-color py-3 px-5">Send Quote</button>
        <button className="button py-3 px-5">Learn More</button>
      </div>
      {/* gradient start */}
      <div className="absolute z-[-1] w-[80%] h-[90%] sm:top-0 -left-full orange-gradient " />
      <div className="absolute z-[-1] w-[40%] h-[70%] sm:bottom-40 green-gradient " />
      <div className="absolute z-[-1] w-[70%] h-[80%] sm:-right-[0] 2xl:-right-[50%] bottom-20 red-gradient " />
      {/* gradient end */}
    </div>
  );
};

export default Hero;
