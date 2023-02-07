import React, { useState } from "react";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const handleClickHamburger = () => {
    setHamburgerActive(!hamburgerActive);
    if (hamburgerActive) {
      document.querySelector(".ham").classList.remove("active");
    } else {
      document.querySelector(".ham").classList.add("active");
    }
  };

  //   when scroll down, navbar should be sticky
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 50);
    if (navbar.classList.contains("sticky")) {
      navbar.classList.add("top-0");
      navbar.classList.add("navbar-scoll");
    } else {
      navbar.classList.remove("top-0");
      navbar.classList.remove("navbar-scoll");
    }
  });

  return (
    <div className="navbar flex px-[1rem] py-2 justify-between">
      <div className="flex items-center gap-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9221 5.77922V3C18.9221 1.89543 18.0266 1 16.9221 1H3C1.89543 1 1 1.89543 1 3V16.9221C1 18.0266 1.89543 18.9221 3 18.9221H6.22727"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            x="7.078"
            y="6.48053"
            width="15.9221"
            height="15.9221"
            rx="1"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
        <h1 className="text-2xl">Collosal.</h1>
      </div>
      <div className="hidden">
        <ul className="flex">
          <li className="navbar-links">Services</li>
          <li className="navbar-links">How We Work</li>
          <li className="navbar-links">Projects</li>
          <li className="navbar-links">About</li>
        </ul>
      </div>
      <button className="hidden navbar-links">Contact</button>

      {/* hamburger menu */}
      <svg
        className="ham hamRotate ham8"
        viewBox="0 0 100 100"
        width="50"
        onClick={handleClickHamburger}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </div>
  );
};

export default Navbar;
