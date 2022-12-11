import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
const Socials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://linkedin.com/in/brightiortsor"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={25} />
      </a>
      <a
        href="https://github.com/brightiortsor"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={30} />
      </a>
      <a
        href="https://twitter.com/thefineuncle"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterCircle size={30} />
      </a>
    </div>
  );
};

export default Socials;
