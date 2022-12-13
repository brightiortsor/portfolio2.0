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
            <FaReact />
            <h4>React</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <RiVuejsFill />
            <h4>Vue</h4>
            <small className="text-light">Intermediate</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <TbBrandJavascript />
            <h4>Javascript</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <DiCss3 />
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <AiOutlineHtml5 />
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <SiTailwindcss />
            <h4>TailwindCSS</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <FaBootstrap />
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <SiMaterialui />
            <h4>Material UI</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>

          <article className="experience-details">
            <FaGitAlt />
            <h4>Git & GitHub</h4>
            <small className="text-light">Experienced</small>
            <BsPatchCheckFill />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
