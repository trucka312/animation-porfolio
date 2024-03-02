import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import StartsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-contain lg:bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div>
          <About />
          <WorkExperience />
          <Technologies />
          <Project />
        </div>

        <div className="relative">
          <Contact />
          <StartsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
