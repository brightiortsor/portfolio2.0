/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RxCode } from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer data-aos="fade-up" data-aos-duration="2000">
      <a
        data-aos="fade-up"
        data-aos-duration="2000"
        href="#"
        className="footer-logo"
      >
        <RxCode className="code-logo" />i<span className="my-logo">B</span>i
      </a>
      <ul data-aos="fade-up" data-aos-duration="2500" className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Stack</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a
          data-aos="fade-up"
          data-aos-duration="3000"
          href="https://linkedin.com/in/brightiortsor"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={25} />
        </a>
        <a
          data-aos="fade-up"
          data-aos-duration="3500"
          href="https://github.com/brightiortsor"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={25} />
        </a>
        <a
          data-aos="fade-up"
          data-aos-duration="4000"
          href="https://twitter.com/thefineuncle"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle size={25} />
        </a>
      </div>

      <div className="copyright">
        <small data-aos="fade-up" data-aos-duration="4000">
          &copy; 2022. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
