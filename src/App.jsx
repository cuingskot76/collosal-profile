import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/Footer";
import Callout from "./components/home/Callout";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Partners from "./components/home/Partners";
import Project from "./components/home/Project";
import Team from "./components/home/Team";
import Testimonials from "./components/home/Testimonials";
import Work from "./components/home/Work";
import Navbar from "./components/Navbar";
import Design from "./components/services/Design";
import Development from "./components/services/Development";
import HeroServices from "./components/services/HeroServices";
import Maintenance from "./components/services/Maintenance";
import HeroServiceDetails from "./components/service-details/HeroServiceDetails";
import DevelopmentDetails from "./components/service-details/DevelopmentDetails";
import FeatureDetails from "./components/service-details/FeatureDetails";
import Faq from "./components/service-details/Faq";
import HeroWorks from "./components/work/HeroWorks";
import ProblemWorks from "./components/work/ProblemWorks";
import PlanningWorks from "./components/work/PlanningWorks";
import CompleteWorks from "./components/work/CompleteWorks";
import HeroProject from "./components/project/HeroProjects";

import { AnimatePresence, motion as m } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AnimatePresence initial={false} mode={"wait"}>
        <Navbar />
        <m.div
          // variants={animations}
          // initial="initial"
          // animate="animate"
          // exit="exit"
          // transition={{ duration: 1 }}
          // className=" absolute top-0 left-0 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
        >
          <Hero />
          <Features />
          <Partners />
          <Work />
          <Team />
          <Project />
          <Testimonials />
          <Callout />
          <Footer />
        </m.div>
        {/* <Outlet /> */}
      </AnimatePresence>
    ),
  },
  {
    path: "/services",
    element: (
      <AnimatePresence initial={false} mode={"wait"}>
        <Navbar />
        <HeroServices />
        <Design />
        <Development />
        <Maintenance />
        <Callout />
        <Footer />
      </AnimatePresence>
    ),
  },
  {
    path: "/services/service-detail",
    element: (
      <div>
        <Navbar />
        <HeroServiceDetails />
        <DevelopmentDetails />
        <FeatureDetails />
        <Faq />
        <Callout />
        <Footer />
      </div>
    ),
  },
  {
    path: "/work",
    element: (
      <div>
        <Navbar />
        <HeroWorks />
        <ProblemWorks />
        <PlanningWorks />
        <CompleteWorks />
        <Callout />
        <Footer />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <AnimatePresence initial={false}>
        <Navbar />
        <HeroProject />
        <Callout />
        <Footer />
      </AnimatePresence>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <Callout />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
