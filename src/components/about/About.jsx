import React from "react";
import { logos } from "../../constant";

const About = () => {
  return (
    <div className="relative">
      {/* about-1 */}
      <div className="relative my-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 md:gap-5 lg:gap-10 2xl:gap-32 ">
          <div className="mb-28">
            <img
              src="../../../main/about-1.png"
              alt="about-1"
              className="relative"
            />
            <img
              src="../../../main/about-2.png"
              alt="about-2"
              className="absolute top-1/3 left-1/2 lg:top-1/2 lg:left-1/4"
            />
          </div>
          <div className="md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-5 lg:gap-10 2xl:gap-32">
            <div className="md:flex flex-col flex-1">
              <h1 className="subTitle">ABOUT</h1>
              <h3 className="font-bold text-2xl md:text-3xl mt-1 mb-7">
                We are creative, smart and hardworking people
              </h3>
              <p className="muted mb-5 md:mb-10">
                Several creative people gather in the same place - that's
                Collosal. We collaborate to produce the best results, loved by
                clients and comfortable for users. Here we maintain togetherness
                even though with different backgrounds, all the people here are
                already experts in their respective fields.
              </p>
            </div>
          </div>
        </div>
        {/* gradient start */}
        <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 right-[50%] orange-gradient" />
        <div className="absolute z-[-2] w-[10%] h-[30%] green-gradient top-0 left-[30%]" />
        {/* gradient end */}
      </div>
      {/* end__about-1 */}

      {/* statistics */}
      <div className="mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center items-center">
        <span className="border__t pt-16">
          <h3 className="subTitle">STATISTICS</h3>
          <h1 className="font-bold pt-3 pb-6 text-3xl md:text-4xl">
            In 3 years we reached 8 <br /> countries, 193 clients and earning
            <br />
            $100k USD
          </h1>
        </span>
      </div>
      {/* end__statistics */}

      {/* statistics-details */}
      <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        <div className="flex flex-wrap justify-center gap-10 md:justify-around items-center bg-light py-10">
          <div className="flex items-center gap-10">
            <div className="bg-light__ px-5 py-5 rounded-md ">
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
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl md:text-3xl">8</h1>
              <span className="muted">COUNTRIES</span>
            </div>
          </div>
          <div className="flex items-center gap-10 ">
            <div className="bg-light__ px-5 py-5 rounded-md ">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl md:text-3xl">193</h1>
              <span className="muted">CLIENTS</span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="bg-light__ px-5 py-5 rounded-md ">
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
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl md:text-3xl">$100k</h1>
              <span className="muted">EARNING</span>
            </div>
          </div>
        </div>
      </div>
      {/* end__statistics-details */}

      {/* partners */}
      <div className="mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        <div className="flex flex-wrap gap-5 md:gap-8 lg:gap-11 items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={logo.url + index}
              className="w-[100px] md:w-[110px] lg:w-[130px]"
            >
              <img src={logo.url} alt={logo.url} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      {/* end__partners */}

      {/* our-teams */}
      <div className="relative mt-10 sm:mt-20 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        <div class="py-10">
          <div class="xl:container mx-auto px-6 md:px-12">
            <h3 className="subTitle text-center">OUR TEAM</h3>
            <h1 className="font-bold pt-3 pb-6 text-2xl md:text-3xl text-center">
              Meet the team! All creative <br /> people are here
            </h1>
          </div>
        </div>

        <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="../../../teams/ali.webp"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-teams  translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 class="text-xl font-semibold  text-white">Angela Vas</h4>
                <span class="block text-sm muted">CEO-Founder</span>
              </div>
              <p class="mt-8 text-gray-300 ">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="../../../teams/amir.webp"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-teams  translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 class="text-xl font-semibold  text-white">Yolanda Smith</h4>
                <span class="block text-sm muted">CEO-Founder</span>
              </div>
              <p class="mt-8 text-gray-300 ">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              class="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="../../../teams/khaled.webp"
              alt="man"
              loading="lazy"
              width="640"
              height="805"
            />
            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-teams  translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 class="text-xl font-semibold  text-white">
                  Jessica Taylor
                </h4>
                <span class="block text-sm muted">
                  Chief Technology Officer
                </span>
              </div>
              <p class="mt-8 text-gray-300 ">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="../../../teams/ludovic.webp"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-teams  translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 class="text-xl font-semibold  text-white">
                  Dareel O'Conner
                </h4>
                <span class="block text-sm muted">Software Engineer</span>
              </div>
              <p class="mt-8 text-gray-300 ">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="../../../teams/sigmud.webp"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-teams  translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 class="text-xl font-semibold  text-white">
                  Fylood Youssef
                </h4>
                <span class="block text-sm muted">System Analyst</span>
              </div>
              <p class="mt-8 text-gray-300 ">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="../../../teams/wan.webp"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-teams  translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 class="text-xl font-semibold  text-white">Wan Pong</h4>
                <span class="block text-sm muted">Project Manager</span>
              </div>
              <p class="mt-8 text-gray-300 ">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto flex flex-col justify-center items-center">
          {/* gradient start */}
          <div className="hidden md:block absolute z-[-1] w-[10%] h-[10%] rounded-full top-[0] md:-right-[0] xl:-right-[20%] green-ball-gradient" />
          <div className="hidden md:block absolute z-[-2] w-[7%] h-[7%] rounded-full -top-[10%] md:-left-[0] xl:-left-[30%] red-ball-gradient" />
          <div className="hidden md:block absolute z-[-1] w-[5%] h-[5%] rounded-full top-[30%] md:-right-[0] xl:-right-[30%] blue-ball-gradient" />
          {/* gradient end */}
        </div>
      </div>
      {/* end__our-teams */}

      {/* gradient start */}
      <div className="hidden sm:block absolute z-[-1] w-[30%] h-[30%] top-0 left-0 orange-gradient__2 blur-[300px] sm:blur-[400px]"></div>
      <div className="hidden sm:block absolute z-[-2] w-[20%] h-[30%] top-0 right-[40%] green-gradient__2 blur-[200px] sm:blur-[300px]" />
      <div className="hidden sm:block absolute z-[-1] w-[30%] h-[30%] -right-[0] 2xl:-right-[0] top-20 red-gradient__2 blur-[300px] sm:blur-[400px] sm:top-0" />
      {/* gradient end */}
    </div>
  );
};

export default About;
