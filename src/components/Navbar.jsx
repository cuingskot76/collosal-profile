import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { easeOut, motion as m } from "framer-motion";
import Button from "./Atoms/Button";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [sticky, setSticky] = useState("");

  const handleClickHamburger = () => {
    setHamburgerActive(!hamburgerActive);
    const sideNav = document.querySelector(".sideNav");

    if (hamburgerActive) {
      document.querySelector(".ham").classList.remove("active");
      document.querySelectorAll(".line").forEach((line) => {
        line.classList.remove("active");
      });
      sideNav.classList.remove("sidebar");
      sideNav.classList.add("hidden");
    } else {
      document.querySelector(".ham").classList.add("active");
      document.querySelectorAll(".line").forEach((line) => {
        line.classList.add("active");
      });
      sideNav.classList.add("sidebar");
      sideNav.classList.remove("hidden");
    }
  };

  const handleClickNavbar = () => {
    const nav = document.querySelectorAll(".all-nav");

    nav.forEach((link) => {
      link.addEventListener("click", function (e) {
        nav.forEach((navLink) => {
          navLink.classList.remove("active");
          navLink.classList.add("navbar-muted");
          navLink.classList.remove("muted");
        });
        link.classList.toggle("active");
        link.classList.toggle("navbar-muted");
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
      <Link to="/" className="all-nav flex items-center gap-3 text-white">
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
      <div className="hidden sm:block">
        <ul className="flex gap-3 md:gap-7 lg:gap-12 xl:gap-14">
          <Link
            to="/services"
            className="all-nav navbar-links muted hover:text-white "
            onClick={handleClickNavbar}
          >
            Services
          </Link>
          <Link
            to="/work"
            className="all-nav navbar-links muted hover:text-white"
            onClick={handleClickNavbar}
          >
            How We Work
          </Link>
          <Link
            to="/projects"
            className="all-nav navbar-links muted hover:text-white"
            onClick={handleClickNavbar}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="all-nav navbar-links muted hover:text-white"
            onClick={handleClickNavbar}
          >
            About
          </Link>
        </ul>
      </div>

      <Button style="hidden sm:block navbar-links md:px-7 md:py-3 md:rounded-md">
        <Link to="/contact">Contact</Link>
      </Button>

      {/* hamburger menu */}
      <svg
        className="ham hamRotate ham8 sm:hidden z-10"
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

      {/* sidebar */}
      <m.div className="sideNav hidden sm:hidden">
        <ul className="flex flex-col m-auto text-center h-full justify-center gap-20">
          <Link
            to="/services"
            className="all-nav navbar-links muted text-3xl hover:text-white"
            onClick={handleClickNavbar}
          >
            Services
          </Link>
          <Link
            to="/work"
            className="all-nav navbar-links muted text-3xl hover:text-white"
            onClick={handleClickNavbar}
          >
            How We Work
          </Link>
          <Link
            to="/projects"
            className="all-nav navbar-links muted text-3xl hover:text-white"
            onClick={handleClickNavbar}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="all-nav navbar-links muted text-3xl hover:text-white"
            onClick={handleClickNavbar}
          >
            About
          </Link>
        </ul>
      </m.div>
      {/* end__sidebar */}
    </div>
  );
};

export default Navbar;
