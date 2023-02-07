import React from "react";

const Pricing = () => {
  return (
    <div class="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
      <div class="m-auto text-center lg:w-7/12">
        <h2 class="subTitle">GET STARTED</h2>
        <h1 className="font-bold text-2xl md:text-3xl mt-1 mb-7 md:mb-16 md:max-w-lg m-auto">
          What do you need? Choose a service that can help you
        </h1>
      </div>
      <div class="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
        <div class="group relative md:col-span-1 lg:w-[32%]">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div class="relative space-y-8 p-8">
            <h3 class="text-center text-3xl font-semibold text-gray-700 dark:text-white">
              UI Design
            </h3>
            <div class="relative flex justify-around">
              <div class="flex">
                <span class="-ml-6 mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  $
                </span>
                <span class="leading-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white">
                  1200
                </span>
              </div>
            </div>
            <ul
              role="list"
              class="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>10 design pages</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>Well-documented</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>4 revisions</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>$100/ additional page</span>
              </li>
            </ul>
            <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-base font-semibold text-sky-600 dark:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>

        <div class="group relative row-start-1 md:col-span-2 lg:w-[36%]">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-[#007FEC] bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div class="relative space-y-8 p-8">
            <h3 class="text-center text-3xl md:text-4xl font-semibold text-gray-700 dark:text-white">
              Development
            </h3>
            <div class="overflow-hidden">
              <div class="flex items-end justify-center">
                <div class="flex">
                  <span class="-ml-6 mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                    $
                  </span>
                  <span class="leading-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white">
                    5000
                  </span>
                </div>
              </div>

              <span class="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900">
                Most Popular
              </span>
            </div>
            <ul
              role="list"
              class="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>Web & mobile</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>Well-documented</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>10 revisions</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>$1000/ additional feature</span>
              </li>
            </ul>
            <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-[#007FEC] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-base font-semibold text-sky-600 dark:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>

        <div class="group relative md:col-span-1 lg:w-[32%]">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div class="relative space-y-8 p-8">
            <h3 class="text-center text-2xl font-semibold text-gray-700 dark:text-white">
              Maintenance
            </h3>
            <div class="relative flex justify-around">
              <div class="flex">
                <span class="-ml-2 mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  $
                </span>
                <span class="leading-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white">
                  3000
                </span>
              </div>
            </div>
            <ul
              role="list"
              class="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
            >
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>Daily backup</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>3 hours of maintenance</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>Including fixing bugs</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-[#00B1FD]">&#10003;</span>
                <span>$50/ additional hour</span>
              </li>
            </ul>
            <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-base font-semibold text-sky-600 dark:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
