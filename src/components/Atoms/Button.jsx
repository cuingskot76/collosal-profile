import React from "react";

const Button = ({ children, primary, style }) => {
  return (
    <div
      className={`${
        primary
          ? "bg-[#6016fc] hover:bg-[#4c09df]"
          : "bg-[#ffffff1a] hover:bg-[#ffffff0e]"
      } ${style} py-3 px-5 cursor-pointer rounded-sm`}
    >
      {children}
    </div>
  );
};

export default Button;
