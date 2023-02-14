import React from "react";
import { features } from "../../constant";
import { logos } from "../../constant";
import { work } from "../../constant";
import { team } from "../../constant";
import { project } from "../../constant";
import { testimonials } from "../../constant";

const Hero = () => {
  return (
    <div className="mt-10 sm:mt-20 py-2 px-[2rem] sm:px-[3rem] sm:py-5 md:px-[4rem] lg:px-[7rem] xl:px-[15rem] 2xl:px-[20rem]">
      {/* hero */}
      <div className="relative mt-10 sm:mt-20 max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center items-center">
        <h3 className="subTitle">CLIENT-DEVELOPMENT DRIVEN</h3>
        <h1 className="font-bold pt-3 pb-6 text-3xl md:text-4xl">
          We Design. We Develop. We Ship. In The Same Day.
        </h1>
        <p className="muted">
          We are committed to not making clients wait. We will deliver the work
          as quickly as possible. Even on the same day. Even so, we do not
          reduce the quality of our work.
        </p>
        <div className="gap-5 flex mt-10 md:gap-6">
          <button className="button-color py-3 px-5">Send Quote</button>
          <button className="button py-3 px-5">Learn More</button>
        </div>
        {/* gradient start */}
        <div className="absolute z-[-1] w-[100%] h-[100%] sm:top-0 -left-full orange-gradient blur-[300px]" />
        <div className="absolute z-[-2] w-[40%] h-[70%] sm:bottom-40 green-gradient blur-[200px]" />
        <div className="absolute z-[-1] w-[100%] h-[100%] sm:-right-[0] 2xl:-right-[50%] bottom-20 red-gradient blur-[300px]" />
        {/* gradient end */}
      </div>
      {/* end__hero */}

      {/* features */}
      <div className="mt-10 ">
        <div className="md:flex justify-center gap-5">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="mb-5 bg-light md:w-[320px] rounded-sm px-5 py-4"
            >
              <img src={feature.url} alt={feature.title} />
              <h4 className="mt-2 mb-5 md:mb-7 text-xl font-bold">
                {feature.title}
              </h4>
              <p className="muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* end__features */}

      {/* partners */}
      <div className="mt-20">
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

      {/* works */}
      <div className="relative mt-20">
        {work?.map((item, index) => (
          <div
            key={item.title}
            className="md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-3 lg:gap-5 xl:gap-52"
          >
            <div className="md:flex flex-col flex-1">
              <h3 className="subTitle">{item.subTitle}</h3>
              <h1 className="font-bold text-2xl md:text-3xl mt-1 mb-7">
                {item.title}
              </h1>
              <p className="muted">{item.description}</p>
            </div>
            <div className="w-[400px] flex flex-1">
              <img src={item.url} alt={item} className="w-full" />
            </div>
          </div>
        ))}
        {/* gradient start */}
        <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 right-[50%] orange-gradient__2 blur-[200px]" />
        <div className="absolute z-[-2] w-[10%] h-[30%] green-gradient__2 blur-[150px] top-0 left-[30%]" />
        {/* gradient end */}
      </div>
      {/* end__works */}

      {/* teams */}
      <div className="relative mt-20">
        {team?.map((item, index) => (
          <div
            key={item.description}
            className="md:flex md:flex-row md:items-center md:justify-center md:gap-3 lg:gap-5 xl:gap-52"
          >
            <div className="md:flex flex-col flex-1">
              <h3 className="subTitle">{item.subTitle}</h3>
              <h1 className="font-bold text-2xl md:text-3xl mt-1 mb-7">
                {item.title}
              </h1>
              <p className="muted">{item.description}</p>
            </div>
            <div className="w-[400px] flex flex-1 mt-5">
              <img src={item.url} alt={item} className="w-full" />
            </div>
          </div>
        ))}
        {/* gradient start */}
        <div className="absolute z-[-1] w-[40%] h-[20%] bottom-0 left-[50%] orange-gradient__2 blur-[200px]" />
        <div className="absolute z-[-2] w-[10%] h-[30%] blue-gradient__2 blur-[100px] top-0 right-[20%]" />
        {/* gradient end */}
      </div>
      {/* end__teams */}

      {/* projects */}
      <div className="relative mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto flex flex-col justify-center items-center">
        {project?.map((item, index) => (
          <div key={item.title}>
            <h3 className="subTitle text-center">{item.subTitle}</h3>
            <h1 className="font-bold pt-3 pb-6 text-2xl md:text-3xl text-center">
              {item.title}
            </h1>
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
      {/* end__projects */}

      {/* testimonials */}
      <div className="relative mt-20">
        <h2 className="subTitle text-center">TESTIMONIALS</h2>
        <h1 className="font-bold text-2xl md:text-3xl mt-1 pb-7 md:pb-16 lg:pb-24 md:max-w-lg m-auto text-center">
          What do our clients say that we never let down?
        </h1>
        <div className="md:flex md:gap-7">
          {testimonials?.map((item, index) => (
            <div
              key={item.username}
              className={`mb-5 text-center flex flex-col justify-center items-center bg-light py-7 px-5 rounded-md flex-1 ${
                (index + 1) % 2 === 0
                  ? "border border-blue-400 lg:relative lg:bottom-12"
                  : null
              }`}
            >
              <div className="w-[100px] h-[100px] rounded-full">
                <img
                  src={item.img}
                  alt={item.username}
                  className="w-full rounded-full h-full object-cover"
                />
              </div>
              <p className="font-bold text-lg pt-5">{item.username}</p>
              <p className="muted pt-2 pb-8">{item.working}</p>
              <p className="muted text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        {/* gradient start */}
        <div className="absolute z-[-2] w-[10%] h-[30%] green-gradient top-[20%] right-[30%]" />
        {/* gradient end */}
      </div>
      {/* end__testimonials */}

      {/* callout */}
      <div className="mt-20 md:flex items-center justify-between">
        <p className="font-bold text-2xl text-center md:text-3xl md:max-w-md">
          We've prepared everything, it's time for you to tell the problem
        </p>
        <div className="gap-5 flex md:gap-6 items-center justify-center mt-5 md:mt-0">
          <button className="button-color py-3 px-5">Send Quote</button>
          <button className="button py-3 px-5">Ask Us</button>
        </div>
      </div>
      {/* end__callout */}
    </div>
  );
};

export default Hero;
