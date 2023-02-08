import React from "react";
import { project } from "../../constant";

const Project = () => {
  return (
    <div className="relative mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto flex flex-col justify-center items-center">
      {project?.map((item, index) => (
        <div key={item}>
          <h3 className="subTitle text-center">{item.subTitle}</h3>
          <h1 className="font-bold pt-3 pb-6 text-2xl md:text-3xl text-center">
            {item.title}
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-center gap-5">
            {item.details?.map((detail, index) => (
              <div
                key={detail}
                className="flex text-center flex-col mb-5 bg-light rounded-sm px-3 pt-5 pb-10"
              >
                <div className="max-w-[300px] bg-cover object-cover">
                  <img
                    src={detail.url}
                    alt={detail.title}
                    className="rounded-sm w-full bg-cover object-cover"
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold">{detail.title}</p>
                  <p className="muted mb-8 mt-2">{detail.description}</p>
                  <button className="py-2 px-7 border bottom-1 rounded-full">
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* gradient start */}
      <div className="absolute z-[-1] w-[10%] h-[10%] rounded-full top-[0] -right-[20%] green-ball-gradient" />
      <div className="absolute z-[-2] w-[7%] h-[7%] rounded-full -top-[10%] -left-[30%] red-ball-gradient" />
      <div className="absolute z-[-1] w-[5%] h-[5%] rounded-full top-[30%] -right-[50%] blue-ball-gradient" />
      {/* gradient end */}
    </div>
  );
};

export default Project;
