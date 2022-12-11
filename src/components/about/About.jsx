import "./About.css";
import React from "react";
import ME from "../../assets/b3.PNG";
import { FaAward } from "react-icons/fa";
import { BsFolder2 } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1 . 5 + Working Years</small>
            </article>
            <article className="about-card">
              <BsFolder2 className="about-icon" />
              <h5>Projects</h5>
              <small>3 0 + Completed</small>
            </article>
          </div>
          <p>
            I build mobile friendly and responsive stuff for the web and
            everything in between. I am eager to continue learning and growing
            myself as a developer, and I am excited to bring my skills and
            experience to a new team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk?
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
