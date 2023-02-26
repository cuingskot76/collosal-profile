import React from "react";
import Paragraph from "../Atoms/Paragraph";
import Button from "../Atoms/Button";
import Gradient from "../Atoms/Gradient";

const Hero = () => {
  return (
    <div className="relative my-20 lg:mt-28 max-w-2xl py-2 px-[1rem] m-auto text-center flex flex-col justify-center ">
      <Paragraph style="subTitle">CLIENT-DEVELOPMENT DRIVEN</Paragraph>
      <Paragraph style="font-bold pt-3 pb-6" fontSize="text-3xl md:text-4xl">
        We Design. We Develop. We Ship. In The Same Day.
      </Paragraph>
      <Paragraph style="muted">
        We are committed to not making clients wait. We will deliver the work as
        quickly as possible. Even on the same day. Even so, we do not reduce the
        quality of our work.
      </Paragraph>
      <div className="gap-5 flex mt-10 md:gap-6 justify-center">
        <Button primary={true}>Send Quote</Button>
        <Button>Learn More</Button>
      </div>

      <Gradient
        style=" z-[-1] w-[100%] h-[100%] blur-[300px] orange-gradient"
        topLeft={true}
      />
      <Gradient
        style=" z-[-2] w-[40%] h-[70%] blur-[200px] green-gradient"
        buttom={true}
      />
      <Gradient
        style=" z-[-1] w-[100%] h-[100%] blur-[300px] red-gradient"
        rightBottom={true}
      />
    </div>
  );
};

export default Hero;
