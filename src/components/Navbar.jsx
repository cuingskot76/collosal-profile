import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [sticky, setSticky] = useState("");

  const handleClickHamburger = () => {
    setHamburgerActive(!hamburgerActive);
    if (hamburgerActive) {
      document.querySelector(".ham").classList.remove("active");
    } else {
      document.querySelector(".ham").classList.add("active");
    }
  };

  const handleClickNavbar = () => {
    const nav = document.querySelectorAll(".all-nav");

    nav.forEach((link) => {
      link.addEventListener("click", function (e) {
        nav.forEach((link) => link.classList.remove("active"));
        link.classList.toggle("active");
      });
    });
  };

  useEffect(() => {
    const stickyNav = () => {
      let windowScroll = window.scrollY;
      windowScroll > 0
        ? setSticky("sticky top-0 navbar-scroll")
        : setSticky("");
    };
    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  return (
    <div
      className={`${sticky} navbar flex items-center justify-between py-2 px-[1.5rem] sm:px-[2rem] sm:py-5 md:px-[3.5rem] lg:px-[5rem] xl:px-[10rem] 2xl:px-[15rem]`}
    >
      <Link to="/" className="all-nav flex items-center gap-3">
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
      </Link>
      <div className="hidden sm:block ">
        <ul className="flex gap-3 md:gap-7 lg:gap-12 xl:gap-14">
          <Link
            to="/services"
            className="all-nav navbar-links navbar-muted"
            onClick={handleClickNavbar}
          >
            Services
          </Link>
          <Link to="/work" className="all-nav navbar-links navbar-muted">
            How We Work
          </Link>
          <Link to="/projects" className="all-nav navbar-links navbar-muted">
            Projects
          </Link>
          <Link to="/about" className="all-nav navbar-links navbar-muted">
            About
          </Link>
        </ul>
      </div>
      <Link
        to="/contact"
        className="hidden sm:block navbar-links button px-5 py-2 rounded-sm md:px-7 md:py-3 md:rounded-md"
      >
        Contact
      </Link>

      {/* hamburger menu */}
      <svg
        className="ham hamRotate ham8 sm:hidden"
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
