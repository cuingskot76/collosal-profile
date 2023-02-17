import React from "react";
import { works1, works2, works3 } from "../../constant";

const Works = () => {
  return (
    <div className="relative">
      <div className=" mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center items-center">
        <span className="border_ pb-24">
          <h3 className="subTitle">HOW WE WORK</h3>
          <h1 className="font-bold pt-3 pb-6 text-3xl md:text-4xl">
            We have a workflow that <br /> allows the job to be delivered well
          </h1>
        </span>
      </div>

      {/* works-1 */}
      <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        {works1?.map((item, index) => (
          <div
            key={item.title}
            className="md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-5 lg:gap-10 2xl:gap-32"
          >
            <div className="md:flex flex-col flex-1">
              <h1 className="subTitle">{item.title}</h1>
              <h3 className="font-bold text-2xl md:text-3xl mt-1 mb-7">
                {item.subTitle}
              </h3>
              <p className="muted mb-5 md:mb-10">{item.description}</p>
            </div>
            <div className="w-[400px] flex flex-1 m-auto">
              <img src={item.url} alt={item} className="w-full mt-5" />
            </div>
          </div>
        ))}
        {/* gradient start */}
        <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 right-[50%] orange-gradient" />
        <div className="absolute z-[-2] w-[10%] h-[30%] green-gradient top-0 left-[30%]" />
        {/* gradient end */}
      </div>
      {/* end__works-1 */}

      {/* works-2 */}
      <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        {works2?.map((item, index) => (
          <div
            key={item.description}
            className="md:flex md:flex-row md:items-center md:justify-center md:gap-5 lg:gap-10 2xl:gap-32"
          >
            <div className="md:flex flex-col flex-1">
              <h1 className="subTitle">{item.title}</h1>
              <h3 className="font-bold text-2xl md:text-3xl mt-1 mb-7">
                {item.subTitle}
              </h3>
              <p className="muted mb-5 md:mb-10">{item.description}</p>
            </div>
            <div className="w-[400px] flex flex-1 mt-5 md:mt-auto m-auto">
              <img src={item.url} alt={item} className="w-full" />
            </div>
          </div>
        ))}
        {/* gradient start */}
        <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 left-[50%] orange-gradient" />
        <div className="absolute z-[-2] w-[10%] h-[30%] blue-gradient top-0 right-[20%]" />
        {/* gradient end */}
      </div>
      {/* end__works-2 */}

      {/* works-3 */}
      <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        {works3?.map((item, index) => (
          <div
            key={item.title}
            className="md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-5 lg:gap-10 2xl:gap-32"
          >
            <div className="md:flex flex-col flex-1">
              <h1 className="subTitle">{item.title}</h1>
              <h3 className="font-bold text-2xl md:text-3xl mt-1 mb-7">
                {item.subTitle}
              </h3>
              <p
                className={`muted mb-5 md:mb-10 ${item.description.includes(
                  1 ? "mt-5" : "mt-10"
                )}`}
              >
                {item.description}
              </p>
            </div>
            <div className="w-[400px] flex flex-1 m-auto">
              <img src={item.url} alt={item} className="w-full mt-5" />
            </div>
          </div>
        ))}
        {/* gradient start */}
        <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 right-[50%] orange-gradient" />
        <div className="absolute z-[-2] w-[10%] h-[30%] green-gradient top-0 left-[30%]" />
        {/* gradient end */}
      </div>
      {/* end__works-3 */}

      {/* gradient start */}
      <div className="absolute z-[-1] w-[30%] h-[30%] top-0 left-0 orange-gradient__2 blur-[300px] sm:blur-[400px]"></div>
      <div className="absolute z-[-2] w-[20%] h-[30%] top-0 right-[40%] green-gradient__2 blur-[200px] sm:blur-[300px]" />
      <div className="absolute z-[-1] w-[30%] h-[30%] -right-[0] 2xl:-right-[0] top-20 red-gradient__2 blur-[300px] sm:blur-[400px] sm:top-0" />
      {/* gradient end */}
    </div>
  );
};

export default Works;
