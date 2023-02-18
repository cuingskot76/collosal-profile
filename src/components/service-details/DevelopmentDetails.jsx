import React from "react";

const DevelopmentDetails = () => {
  return (
    <div className="relative md:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem] md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-5 lg:gap-10 2xl:gap-32">
      <div className="flex-1 pt-10 md:pt-0">
        <h1 className="subTitle"></h1>
        <h3 className="font-bold text-2xl md:text-3xl mt-1 mb-7"></h3>
        <p className="muted text-start flex flex-col">
          <span>
            Just tell us your repetitive problem or the primitive method used
            today, and we will create a digital solution.
          </span>
          <span className="my-10">
            We can build you a website, a mobile app and a desktop app. All
            types of applications have a good security system, are easy to
            maintain, and are high speed.
          </span>
        </p>
        <ul className="mb-10">
          <li className="flex text-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Avoid potential bugs with unit testing
          </li>
          <li className="flex text-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Removing unused code will speed up the application
          </li>
          <li className="flex text-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            The modern design pleases the users
          </li>
          <li className="flex text-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Avoid potential bugs with unit testing
          </li>
        </ul>
      </div>
      <div className="w-[400px] flex flex-1 mt-5 md:mt-auto m-auto">
        <img
          src="../../main/development__services.png"
          alt="dev-img"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DevelopmentDetails;
