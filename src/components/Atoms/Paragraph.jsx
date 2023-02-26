import React from "react";

const Paragraph = ({ children, fontSize, color, style }) => {
  return (
    <p className={`${fontSize} ${style} ${color ? color : "#fff"}`}>
      {children}
    </p>
  );
};

export default Paragraph;
