import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
import Footer from "./components/footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Socials from "./components/header/Socials.jsx";
import { BsArrowUp } from "react-icons/bs";

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      startEvent: "DOMContentLoaded",
      offset: 0,
      once: true,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // scroll event listener to control when to show the scroll button
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle the scroll event
  const handleScroll = () => {
    // Show the scroll button when the user has scrolled down a certain amount
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return loading ? (
    <div className="loading" style={{ backgroundColor: "black" }}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <div
      style={{
        position: "relative",
      }}
    >
      <Header />
      <About />
      <Navbar />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <div
        style={{
          position: "fixed",
          top: "4rem",
          left: "1rem",
          zIndex: "1001",
        }}
      >
        <Socials />
      </div>

      {showScrollButton && (
        <div
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "0.5rem",
            zIndex: "1000",
            fontSize: "2rem",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            padding: "0.3rem 0.8rem",
            cursor: "pointer",
          }}
        >
          <a href="#" onClick={scrollToTop}>
            <BsArrowUp />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
