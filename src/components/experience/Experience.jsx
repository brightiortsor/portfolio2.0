import "./Experience.css";
import React from "react";
import { FaReact } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { RiVuejsFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I have used</h5>
      <h2>My Stack</h2>
      <div className="container experience-container">
        <div className="experience-content">
          <article className="experience-details">
            <FaReact className="skill-icon" />
            <h4>React</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <RiVuejsFill className="skill-icon" />
            <h4>Vue</h4>
            <div className="verified-icon">
              <small className="text-light">Intermediate</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <TbBrandJavascript className="skill-icon" />
            <h4>Javascript</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <DiCss3 className="skill-icon" />
            <h4>CSS</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <AiOutlineHtml5 className="skill-icon" />
            <h4>HTML</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <SiTailwindcss className="skill-icon" />
            <h4>TailwindCSS</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <FaBootstrap className="skill-icon" />
            <h4>Bootstrap</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <SiMaterialui className="skill-icon" />
            <h4>Material UI</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <FaGitAlt className="skill-icon" />
            <h4>Git & GitHub</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
