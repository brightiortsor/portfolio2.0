import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
const Socials = () => {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com/in/brightiortsor">
        <BsLinkedin size={25} />
      </a>
      <a href="https://github.com/brightiortsor">
        <AiFillGithub size={30} />
      </a>
      <a href="https://twitter.com/thefineuncle">
        <AiFillTwitterCircle size={30} />
      </a>
    </div>
  );
};

export default Socials;
