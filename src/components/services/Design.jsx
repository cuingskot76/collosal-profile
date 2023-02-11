import React from "react";
import { Link } from "react-router-dom";
import { design } from "../../constant";

const Design = () => {
  return (
    <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
      {design?.map((item, index) => (
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
            {/* design skills */}
            <div>
              <div className="flex items-center bg-light py-5 px-6 font-semibold border__">
                <div className="flex flex-col">
                  <div className="flex items-center text-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                      />
                    </svg>
                    <p className="pl-5">Beautiful Design</p>
                  </div>
                  <span className="muted">
                    Create a modern design for your idea.
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-light py-5 px-6 font-semibold my-5 border__">
                <div className="flex flex-col">
                  <div className="flex items-center text-center mb-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-9 h-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                      />
                    </svg>
                    <p className="pl-5">Card Name</p>
                  </div>
                  <span className="muted">
                    Create vivid prototypes for your designs.
                  </span>
                </div>
              </div>
            </div>
            {/* end design skills */}
            {/* btn detail */}
            <Link
              to="/services/service-detail"
              className="flex w-fit font-semibold text-center items-center justify-start md:justify-end gap-5 mb-10 hover:text-gray-500"
            >
              <p>Service Detail</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
            {/* end btn detail */}
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
  );
};

export default Design;
