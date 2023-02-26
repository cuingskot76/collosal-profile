import React from "react";

const Gradient = ({ topLeft, rightBottom, buttom, style }) => {
  return (
    <div
      className={`${topLeft && "top-0 -left-full"} 
    ${rightBottom && "-right-0 bottom-20"} ${
        buttom && "bottom-40"
      } ${style} absolute`}
    ></div>
  );
};

export default Gradient;
