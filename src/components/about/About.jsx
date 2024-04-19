import "./About.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { BsFolder2 } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <h5 data-aos="fade-up" data-aos-duration="2000">
        Get to Know
      </h5>
      <h2 data-aos="fade-up" data-aos-duration="2500">
        About Me
      </h2>
      <div className="container about-container">
        <div data-aos="fade-up" data-aos-duration="3000" className="about-me">
          <div className="about-me-img">
            <img
              src={ME}
              alt="My profile"
              data-aos="fade-up"
              data-aos-duration="4000"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article
              data-aos="fade-right"
              data-aos-duration="2000"
              className="about-card"
            >
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>
                <span style={{ fontSize: "1.2rem", padding: "0 0.2rem" }}>
                  2+
                </span>{" "}
                 Years
              </small>
            </article>
            <article
              data-aos="fade-left"
              data-aos-duration="3000"
              className="about-card"
            >
              <BsFolder2 className="about-icon" />
              <h5>Projects</h5>
              <small>
                {" "}
                <span style={{ fontSize: "1.2rem", padding: "0 0.2rem" }}>
                  30+
                </span>{" "}
                Completed
              </small>
            </article>
          </div>
          <p data-aos="fade-up" data-aos-duration="2000">
            I build mobile friendly and responsive stuff for the web and
            everything in between. I am eager to continue learning and growing
            myself as a Software Engineer, and I am excited to bring my skills
            and experience to a new team.
          </p>
          <a
            data-aos="fade-up"
            data-aos-duration="2000"
            href="#contact"
            className="btn btn-primary about-btn btn-sm"
          >
            Let's Talk?
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
