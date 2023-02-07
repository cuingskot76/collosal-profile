import React from "react";
import { project } from "../../constant";

const Project = () => {
  return (
    <div className="mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto flex flex-col justify-center items-center">
      {project?.map((item, index) => (
        <div key={item}>
          <h3 className="subTitle text-center">{item.subTitle}</h3>
          <h1 className="font-bold pt-3 pb-6 text-2xl md:text-3xl text-center">
            {item.title}
          </h1>
          <div className="flex flex-wrap justify-center">
            {item.details?.map((detail, index) => (
              <div
                key={detail}
                className="flex flex-col mb-5 bg-light md:w-[320px] rounded-sm px-5 py-4"
              >
                <div className="w-[300px] bg-cover object-cover">
                  <img
                    src={detail.url}
                    alt={detail.title}
                    className="rounded-sm w-full bg-cover object-cover"
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold">{detail.title}</p>
                  <p className="muted">{detail.description}</p>
                  <button>Detail</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
