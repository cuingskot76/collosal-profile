import React from "react";
import { testimonials } from "../../constant";

const Testimonials = () => {
  return (
    <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
      <h2 class="subTitle text-center">TESTIMONIALS</h2>
      <h1 className="font-bold text-2xl md:text-3xl mt-1 pb-7 md:pb-16 lg:pb-24 md:max-w-lg m-auto text-center">
        What do our clients say that we never let down?
      </h1>
      <div className="md:flex md:gap-7">
        {testimonials?.map((item, index) => (
          <div
            key={item.username}
            className={`mb-5 text-center flex flex-col justify-center items-center bg-light py-7 px-5 rounded-md flex-1 ${
              (index + 1) % 2 === 0
                ? "border border-blue-400 lg:relative lg:bottom-12"
                : null
            }`}
          >
            <div className="w-[100px] h-[100px] rounded-full">
              <img
                src={item.img}
                alt={item.username}
                className="w-full rounded-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-lg pt-5">{item.username}</p>
            <p className="muted pt-2 pb-8">{item.working}</p>
            <p className="muted text-lg">{item.description}</p>
          </div>
        ))}
      </div>

      {/* gradient start */}
      <div className="absolute z-[-2] w-[10%] h-[30%] green-gradient top-[20%] right-[30%]" />
      {/* gradient end */}
    </div>
  );
};

export default Testimonials;
