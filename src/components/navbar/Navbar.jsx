/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { BiUser, BiBook } from "react-icons/bi";
// import { GoProject } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { BsFolder2 } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="navbar">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <BsFolder2 />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactPhone />
      </a>
    </nav>
  );
};

export default Navbar;
