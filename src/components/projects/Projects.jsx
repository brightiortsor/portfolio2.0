import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { data } from "./data";
import ProjectsMobile from "./ProjectsMobile";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? data : data.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="mobile-projects">
        <ProjectsMobile />
      </div>
      <div className="desktop-projects">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="container portfolio-container"
        >
          {visibleProjects.map(({ id, img, title, demo }) => {
            return (
              <article
                data-aos="fade-up"
                data-aos-duration="2000"
                key={id}
                className="portfolio-item"
              >
                <div className="portfolio-item__img">
                  <img
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    src={img}
                    alt={title}
                  />
                </div>
                <h4 data-aos="fade-right" data-aos-duration="3000">
                  {title}
                </h4>
                <div className="portfolio-cta">
                  <a
                    data-aos="fade-right"
                    data-aos-duration="4000"
                    href={demo}
                    className="btn btn-demo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW LIVE DEMO
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <hr className="hr" />
        <div className="show-more-less">
          {showAll ? (
            <button className="show-btn" onClick={handleShowLess}>
              Show Less
            </button>
          ) : (
            <button className="show-btn" onClick={handleShowMore}>
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
