import React, { useState } from "react";
import { project } from "../../constant";

const HeroProject = () => {
  const [projects, setProjects] = useState(project);

  return (
    <div className="mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
      <div className="relative max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center items-center">
        <span className="border_ pb-24">
          <h3 className="subTitle">PROJECTS</h3>
          <h1 className="font-bold pt-3 pb-6 text-3xl md:text-4xl">
            We have completed many amazing projects that you will not believe
          </h1>
        </span>

        {/* gradient start */}
        <div className="absolute z-[-1] w-[100%] h-[100%] sm:top-0 -left-full orange-gradient blur-[300px]" />
        <div className="absolute z-[-2] w-[40%] h-[70%] sm:bottom-40 green-gradient blur-[200px]" />
        <div className="absolute z-[-1] w-[100%] h-[100%] sm:-right-[0] 2xl:-right-[50%] bottom-20 red-gradient blur-[300px]" />
        {/* gradient end */}
      </div>

      {/* main project */}
      <div className="relative mt-10 ">
        {projects?.map((item, index) => (
          <div
            key={item.title}
            className="md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-3 lg:gap-5 xl:gap-16"
          >
            <div className="md:flex flex-col flex-1">
              <p className="muted">{item.details[0].details}</p>
              <h3 className="muted pt-10">
                CATEGORY <br />
                <span className="text-white">{item.details[0].category}</span>
              </h3>
              <h3 className="muted py-10">
                CLIENT <br />
                <span className="text-white">{item.details[0].client}</span>
              </h3>
              <h3 className="muted">
                TECHNOLOGY <br />
                <span className="text-white">{item.details[0].technology}</span>
              </h3>
            </div>
            <div className="w-[400px] flex flex-1">
              <img src={item.details[0].url} alt={item} className="w-full" />
            </div>
          </div>
        ))}
      </div>
      {/* end__main project */}

      {/* all projects */}
      <div className="relative border__t pt-20 mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto flex flex-col justify-center items-center">
        <h3 className="subTitle text-center">PROJECTS</h3>
        <h1 className="font-bold pt-3 pb-6 text-2xl md:text-3xl text-center">
          Other Amazing Projects
        </h1>

        {project?.map((item, index) => (
          <div key={item.title}>
            <div className="flex md:flex-row flex-col items-center justify-center gap-5">
              {item.details?.map((detail, index) => (
                <div
                  key={detail.description}
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
        <div className="hidden md:block absolute z-[-1] w-[10%] h-[10%] rounded-full top-[0] md:-right-[0] xl:-right-[20%] green-ball-gradient" />
        <div className="hidden md:block absolute z-[-2] w-[7%] h-[7%] rounded-full -top-[10%] md:-left-[0] xl:-left-[30%] red-ball-gradient" />
        <div className="hidden md:block absolute z-[-1] w-[5%] h-[5%] rounded-full top-[30%] md:-right-[0] xl:-right-[30%] blue-ball-gradient" />
        {/* gradient end */}
      </div>
      {/* end__all projects */}
    </div>
  );
};

export default HeroProject;
