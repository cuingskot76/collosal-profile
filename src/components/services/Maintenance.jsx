import React from "react";
import { Link } from "react-router-dom";
import { maintenance } from "../../constant";

const Maintenance = () => {
  return (
    <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
      {maintenance?.map((item, index) => (
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
            {/* maintenance */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-0">
              <div className="flex text-center items-center mb-5 mr-5">
                <div className="px-3 py-3 bg-light w-fit rounded-md mr-5">
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
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
                <p className="font-semibold ">Back up every day</p>
              </div>
              <div className="flex text-center items-center mb-5">
                <div className="px-3 py-3 bg-light w-fit rounded-md mr-5">
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
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <p className="font-semibold ">Cleaning every week</p>
              </div>
              <div className="flex text-center items-center mb-5 mr-5">
                <div className="px-3 py-3 bg-light w-fit rounded-md mr-5">
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
                      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                  </svg>
                </div>
                <p className="font-semibold ">Upgrade</p>
              </div>
              <div className="flex text-center items-center mb-5">
                <div className="px-3 py-3 bg-light w-fit rounded-md mr-5">
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
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <p className="font-semibold ">Fixing error</p>
              </div>
            </div>
            {/* end maintenance */}
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

export default Maintenance;
