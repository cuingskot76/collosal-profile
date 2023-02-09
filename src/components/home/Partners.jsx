import React from "react";
import { logos } from "../../constant";

const Partners = () => {
  return (
    <div className="mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
      <div className="flex flex-wrap gap-5 md:gap-8 lg:gap-11 items-center justify-center">
        {logos.map((logo, index) => (
          <div
            key={logo.url + index}
            className="w-[100px] md:w-[110px] lg:w-[130px]"
          >
            <img src={logo.url} alt={logo.url} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
