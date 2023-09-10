import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/home3.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="header-details">
            <h5>Hello, I'm</h5>
            <h1>Bright Iortsor</h1>
            <p className="text-light">Frontend Engineer</p>
            <CTA />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="header-img"
          >
            <img src={ME} alt="Bright" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
