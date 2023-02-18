import React, { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  return (
    <div className="relative">
      <div className="mt-10 sm:mt-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto flex flex-col justify-center items-center">
        <h3 className="subTitle text-center">FAQ</h3>
        <h1 className="font-bold pt-3 pb-6 text-2xl md:text-3xl text-center">
          Frequently asked questions, <br /> maybe the same as yours
        </h1>
      </div>
      <div className="md:mt-10 py-2 px-[1rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[7rem] xl:px-[14rem] 2xl:px-[17rem]">
        <div className="block md:hidden">
          <Accordion open={open === 0} icon={<Icon id={0} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(0)}
              className="text-white hover:text-gray-500 border-gray-800"
            >
              Can I consult first?
            </AccordionHeader>
            <AccordionBody className="muted">
              Of course you can consult us first. We are very happy to help your
              problems and provide our best solutions. You can contact us via
              the contact page.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="text-white hover:text-gray-500 border-gray-800"
            >
              How is the payment system?
            </AccordionHeader>
            <AccordionBody className="muted">
              If the project has agreed, you will pay an advance, and when the
              progress reaches 50% you will make a second payment, and when the
              progress is 100% you will pay it off.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="text-white hover:text-gray-500 border-gray-800"
            >
              What if the project stops halfway?
            </AccordionHeader>
            <AccordionBody className="muted">
              We promise to always finish the project on time, if a problem
              occurs (because of our mistake), all payments will be refunded.
              And the project will be terminated.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="text-white hover:text-gray-500 border-gray-800"
            >
              Does it include servers and domains?
            </AccordionHeader>
            <AccordionBody className="muted">
              You don't need to think about anything else, we have everything
              prepared. You just need to check your progress and make sure the
              features you want are the right one.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="text-white hover:text-gray-500 border-gray-800"
            >
              Will I get the source code?
            </AccordionHeader>
            <AccordionBody className="muted">
              When the project is 100% complete, all the resources, such as
              design files, analysis diagrams, source code, etc. will be
              provided to you. You don't need to worry about this.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="text-white hover:text-gray-500 border-gray-800"
            >
              Is there a warranty?
            </AccordionHeader>
            <AccordionBody className="muted">
              1 year warranty for our errors or mistakes. If you want to add a
              feature that is not included in the warranty, there is another fee
              per feature, and the price depends on the difficulty.
            </AccordionBody>
          </Accordion>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-5 xl:gap-10">
          <div className="pb-8">
            <p className="font-semibold mb-3">Can I consult first?</p>
            <span className="muted">
              Of course you can consult us first. We are very happy to help your
              problems and provide our best solutions. You can contact us via
              the contact page.
            </span>
          </div>
          <div>
            <p className="font-semibold mb-3"> How is the payment system?</p>
            <span className="muted">
              If the project has agreed, you will pay an advance, and when the
              progress reaches 50% you will make a second payment, and when the
              progress is 100% you will pay it off.
            </span>
          </div>
          <div className="pb-8">
            <p className="font-semibold mb-3">
              What if the project stops halfway?
            </p>
            <span className="muted">
              We promise to always finish the project on time, if a problem
              occurs (because of our mistake), all payments will be refunded.
              And the project will be terminated.
            </span>
          </div>
          <div>
            <p className="font-semibold mb-3">
              Does it include servers and domains?
            </p>
            <span className="muted">
              You don't need to think about anything else, we have everything
              prepared. You just need to check your progress and make sure the
              features you want are the right one.
            </span>
          </div>
          <div>
            <p className="font-semibold mb-3"> Will I get the source code?</p>
            <span className="muted">
              When the project is 100% complete, all the resources, such as
              design files, analysis diagrams, source code, etc. will be
              provided to you. You don't need to worry about this.
            </span>
          </div>
          <div>
            <p className="font-semibold mb-3"> Is there a warranty?</p>
            <span className="muted">
              1 year warranty for our errors or mistakes. If you want to add a
              feature that is not included in the warranty, there is another fee
              per feature, and the price depends on the difficulty.
            </span>
          </div>
        </div>

        <p className="mt-20 text-center">
          Didn't find an answer?{" "}
          <span className="text-[#6016FC] font-bold border-b border-b-[#6016FC]">
            Do not hesitate to ask!
          </span>{" "}
        </p>
      </div>

      {/* gradient start */}
      <div className="hidden md:block absolute z-[-1] w-[10%] h-[10%] rounded-full top-[0] md:right-[20%]  green-ball-gradient" />
      <div className="hidden md:block absolute z-[-2] w-[7%] h-[7%] rounded-full -top-[0] md:left-[10%]  red-ball-gradient" />
      <div className="hidden md:block absolute z-[-1] w-[5%] h-[5%] rounded-full top-[30%] md:right-[10%]  blue-ball-gradient" />
      {/* gradient end */}
    </div>
  );
};

export default Faq;
