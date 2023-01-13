import "./Projects.css";
import Manage from "../../assets/manage.png";
import Phonie from "../../assets/phonie.png";
import Todo from "../../assets/todo.png";
import Urekka from "../../assets/urekka.png";
import Travel from "../../assets/travel.png";
import Github from "../../assets/github.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const data = [
  {
    id: 1,
    title: "Landing Page for a Data Company",
    img: Manage,
    github: "https://github.com/brightiortsor/manage-landingPage",
    demo: "https://manage-demo.netlify.app",
  },
  {
    id: 2,
    title: "Network Monitoring App",
    img: Phonie,
    github: "https://replit.com/@Super-Circle/super-circle-phoenie",
    demo: "https://super-circle-phoenie.super-circle.repl.co",
  },
  {
    id: 3,
    title: "Github Profile Finder",
    img: Github,
    github: "https://github.com/brightiortsor/github_finder_app",
    demo: "https://githubpersonfinder.netlify.app",
  },
  {
    id: 4,
    title: "Holiday Destinations Finder",
    img: Travel,
    github: "https://github.com/brightiortsor/travel_app",
    demo: "https://travel-app-lake.vercel.app",
  },
  {
    id: 5,
    title: "A web app for a Consulting firm",
    img: Urekka,
    github: "https://github.com/brightiortsor",
    demo: "https://urekka.vercel.app",
  },
  {
    id: 6,
    title: " Todo List for Sorting Tasks",
    img: Todo,
    github: "https://github.com/brightiortsor/Todo_list",
    demo: "https://todo-lyst-app.netlify.app",
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container portfolio-container"
      >
        {data.map(({ id, img, title, github, demo }) => {
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
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  data-aos="fade-right"
                  data-aos-duration="4000"
                  href={demo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
