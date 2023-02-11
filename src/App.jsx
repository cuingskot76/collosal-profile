import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Callout from "./components/home/Callout";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Partners from "./components/home/Partners";
import Pricing from "./components/home/Pricing";
import Project from "./components/home/Project";
import Team from "./components/home/Team";
import Testimonials from "./components/home/Testimonials";
import Work from "./components/home/Work";
import Navbar from "./components/Navbar";
import Design from "./components/services/Design";
import Development from "./components/services/Development";
import HeroServices from "./components/services/HeroServices";
import Maintenance from "./components/services/Maintenance";
import ServiceDetail from "./components/services/ServiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <Navbar />
        <Hero />
        <Features />
        <Partners />
        <Work />
        <Team />
        <Project />
        <Pricing />
        <Testimonials />
        <Callout />
        <Footer />
        <Outlet />
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        <Navbar />
        <HeroServices />
        <Design />
        <Development />
        <Maintenance />
        <Callout />
        <Footer />
      </div>
    ),
  },
  {
    path: "/services/service-detail",
    element: (
      <div>
        <Navbar />
        <ServiceDetail />
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
