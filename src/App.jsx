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
        {/* <Footer /> */}
        <Outlet />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
