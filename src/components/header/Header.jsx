/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/b1.PNG";
import Socials from "./Socials";
import { RxCode } from "react-icons/rx";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="home-logo">
          <a href="#" className="footer-logo">
            <RxCode className="code-logo" />i<span className="my-logo">B</span>i
          </a>
        </div>

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
