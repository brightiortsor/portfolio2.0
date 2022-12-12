import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/b1.PNG";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, I'm</h5>
        <h1>Bright Iortsor</h1>
        <div className="text-light">Frontend Engineer</div>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="Bright" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
