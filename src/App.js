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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      startEvent: "DOMContentLoaded",
      offset: 0,
      once: true,
    });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
    <div>
      <Header />
      <About />
      <Navbar />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
