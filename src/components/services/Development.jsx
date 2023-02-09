import React from "react";
import { development } from "../../constant";

const Development = () => {
  return (
    <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
      {development?.map((item, index) => (
        <div
          key={item.description}
          className="md:flex md:flex-row md:items-center md:justify-center md:gap-3 lg:gap-5 xl:gap-52"
        >
          <div className="md:flex flex-col flex-1">
            <h1 className="subTitle">{item.title}</h1>
            <h3 className="font-bold text-2xl md:text-3xl mt-1 mb-7">
              {item.subTitle}
            </h3>
            <p className="muted mb-7">{item.description}</p>
            <div className="flex items-center bg-light py-5 px-6 font-semibold border__">
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
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <p className="pl-5">Mobile App Development</p>
            </div>
            <div className="flex items-center bg-light py-5 px-6 font-semibold my-5 border__">
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
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <p className="pl-5">Desktop App Development</p>
            </div>
            <div className="flex items-center bg-light py-5 px-6 font-semibold border__">
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
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p className="pl-5">Web Development</p>
            </div>
          </div>
          <div className="w-[400px] flex flex-1 mt-5">
            <img src={item.url} alt={item} className="w-full" />
          </div>
        </div>
      ))}
      {/* gradient start */}
      <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 left-[50%] orange-gradient" />
      <div className="absolute z-[-2] w-[10%] h-[30%] blue-gradient top-0 right-[20%]" />
      {/* gradient end */}
    </div>
  );
};

export default Development;
