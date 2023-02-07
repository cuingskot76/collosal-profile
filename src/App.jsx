import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Partners from "./components/home/Partners";
import Project from "./components/home/Project";
import Team from "./components/home/Team";
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
