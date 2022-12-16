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
            <FaReact size={25} style={{ color: "#5aa3c5" }} className="last" />
            <h4>ReactJs</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <RiVuejsFill
              size={25}
              style={{ color: "#38b871" }}
              className="last"
            />
            <h4>VueJs</h4>
            <div className="verified-icon">
              <small className="text-light">Intermediate</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <TbBrandJavascript
              size={25}
              style={{ color: "#cfba3f" }}
              className="last"
            />
            <h4>Javascript</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <DiCss3 size={25} style={{ color: "#0f3cce" }} className="last" />
            <h4>CSS</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <AiOutlineHtml5
              size={25}
              style={{ color: "#c94939" }}
              className="last"
            />
            <h4>HTML</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <SiTailwindcss
              size={25}
              style={{ color: "#11d1b8d8" }}
              className="last"
            />
            <h4>TailwindCSS</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <FaBootstrap
              size={25}
              style={{ color: "#706ac9" }}
              className="last"
            />
            <h4>Bootstrap</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <SiMaterialui
              size={25}
              style={{ color: "#3b66f5" }}
              className="last"
            />
            <h4>Material UI</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <FaGitAlt size={25} style={{ color: "#dd452a" }} className="last" />
            <h4>Git & GitHub</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <TbBrandJavascript
              size={25}
              style={{ color: "#cfba3f" }}
              className="last"
            />
            <h4>SwiperJs</h4>
            <div className="verified-icon">
              <small className="text-light">Experienced</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          <article className="experience-details">
            <TbBrandJavascript
              size={25}
              style={{ color: "#cfba3f" }}
              className="last"
            />
            <h4>EmailJs</h4>
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
