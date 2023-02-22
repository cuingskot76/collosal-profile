import React from "react";
import { works3 } from "../../constant";

const CompleteWorks = () => {
  return (
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
      {/* <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 right-[50%] orange-gradient" />
      <div className="absolute z-[-2] w-[10%] h-[30%] green-gradient top-0 left-[30%]" /> */}
      {/* gradient end */}
    </div>
  );
};

export default CompleteWorks;
