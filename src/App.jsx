import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollUp } from "./components/ArrowScroll";

// Sections
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Pages
import WelcomeScreen from "./pages/Welcome";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;

      const scrollPercent = (scrollTop / totalScrollable) * 100;
      setScrollPercentage(scrollPercent);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('/assets/media/bg-23.avif')`,
      }}
      className="bg-fixed min-h-screen bg-no-repeat bg-cover bg-center overflow-x-hidden"
    >
      {/* Welcome Screen */}
      <AnimatePresence>{showWelcome && <WelcomeScreen />}</AnimatePresence>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          showWelcome ? "opacity-0" : "opacity-100"
        }`}
      >
        {scrollPercentage >= 5 && <ScrollUp path="home" />}
        <Navbar value={scrollPercentage} />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
