import React from "react";

const FeatureDetails = () => {
  return (
    <div>
      <div className="mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto flex flex-col justify-center items-center">
        <h3 className="subTitle text-center">FEATURES</h3>
        <h1 className="font-bold pt-3 pb-6 text-2xl md:text-3xl text-center">
          Here's what you will get when <br /> purchasing this service
        </h1>
      </div>
      <div className="relative md:mt-10 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem] grid md:grid-cols-3 gap-5">
        <div className="bg-light py-5 px-5 md:py-7 md:px-7 xl:py-11 xl:px-11 rounded-md">
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
          <h3 className="font-semibold py-3">Design Files</h3>
          <p className="muted">
            Projects are well designed using Figma. You will get the design
            file.
          </p>
        </div>
        <div className="bg-light py-5 px-5 md:py-7 md:px-7 xl:py-11 xl:px-11 rounded-md">
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
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h3 className="font-semibold py-3">Same Day</h3>
          <p className="muted">
            We don't want you to wait long. Everything will be finished on the
            same day.
          </p>
        </div>
        <div className="bg-light py-5 px-5 md:py-7 md:px-7 xl:py-11 xl:px-11 rounded-md">
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
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <h3 className="font-semibold py-3">Quality Code</h3>
          <p className="muted">
            Code written according to good practice is highly maintainable.
          </p>
        </div>
        <div className="bg-light py-5 px-5 md:py-7 md:px-7 xl:py-11 xl:px-11 rounded-md">
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
          <h3 className="font-semibold py-3">Responsive Design</h3>
          <p className="muted">
            Access the website on any device, don't limit your visitors.
          </p>
        </div>
        <div className="bg-light py-5 px-5 md:py-7 md:px-7 xl:py-11 xl:px-11 rounded-md">
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
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
          <h3 className="font-semibold py-3">SEO</h3>
          <p className="muted">
            The website will appear on the first page of the search engine.
          </p>
        </div>
        <div className="bg-light py-5 px-5 md:py-7 md:px-7 xl:py-11 xl:px-11 rounded-md">
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
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          <h3 className="font-semibold py-3">Blazing Fast</h3>
          <p className="muted">
            A high speed website will not disappoint prospective customers.
          </p>
        </div>
        {/* gradient start */}
        <div className="absolute z-[-2] w-[50%] h-[30%] top-0 right-[40%] blue-gradient__2 blur-[300px] sm:blur-[300px] md:top-0 md:blur-[200px] md:right-[30%] md:w-[30%]" />
        <div className="absolute z-[-1] w-[50%] h-[50%] left-0 2xl:-right-[0] top-20 red-gradient__2 blur-[400px] sm:top-0 md:left-[30%] md:w-[20%] md:h-[50%] md:blur-[200px] md:top-[25%]" />
        {/* gradient end */}
      </div>
    </div>
  );
};

export default FeatureDetails;
