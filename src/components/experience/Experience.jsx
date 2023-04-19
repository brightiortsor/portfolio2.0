import "./Experience.css";
import { FaReact } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { RiVuejsFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="experience">
      <h5 data-aos="fade-up" data-aos-duration="2000">
        What I have used
      </h5>
      <h2 data-aos="fade-up" data-aos-duration="2500">
        My Stack
      </h2>
      <div className="container experience-container">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="experience-content"
        >
          {/* 1 */}
          <article
            data-aos="fade-up"
            data-aos-duration="2500"
            className="experience-details"
          >
            <FaReact size={25} style={{ color: "#5aa3c5" }} className="last" />

            <div className="verified-icon">
              <small className="text-light">React.js</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 2 */}
          <article
            data-aos="fade-up"
            data-aos-duration="2500"
            className="experience-details"
          >
            <SiNextdotjs
              size={25}
              style={{ color: "#5aa3c5" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">Next.js</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 3 */}
          <article
            data-aos="fade-up"
            data-aos-duration="2500"
            className="experience-details"
          >
            <SiRedux size={25} style={{ color: "#38b871" }} className="last" />

            <div className="verified-icon">
              <small className="text-light">Redux</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 4 */}
          <article
            data-aos="fade-up"
            data-aos-duration="3000"
            className="experience-details"
          >
            <TbBrandJavascript
              size={25}
              style={{ color: "#cfba3f" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">Javascript</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 5 */}
          <article
            data-aos="fade-up"
            data-aos-duration="3000"
            className="experience-details"
          >
            <SiTypescript
              size={25}
              style={{ color: "#0f3cce" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">Typescript</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 6 */}
          <article
            data-aos="fade-up"
            data-aos-duration="3500"
            className="experience-details"
          >
            <DiCss3 size={25} style={{ color: "#c94939" }} className="last" />

            <div className="verified-icon">
              <small className="text-light">CSS3</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 7 */}
          <article
            data-aos="fade-up"
            data-aos-duration="3500"
            className="experience-details"
          >
            <AiOutlineHtml5
              size={25}
              style={{ color: "#11d1b8d8" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">HTML5</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>
          {/* 8 */}
          <article
            data-aos="fade-up"
            data-aos-duration="4000"
            className="experience-details"
          >
            <SiTailwindcss
              size={25}
              style={{ color: "#706ac9" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">Tailwind</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 9 */}
          <article
            data-aos="fade-up"
            data-aos-duration="4000"
            className="experience-details"
          >
            <FaBootstrap
              size={25}
              style={{ color: "#3b66f5" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">Bootstrap</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 10 */}
          <article
            data-aos="fade-up"
            data-aos-duration="4500"
            className="experience-details"
          >
            <SiMaterialui
              size={25}
              style={{ color: "#dd452a" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">Material UI</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 11 */}
          <article
            data-aos="fade-up"
            data-aos-duration="4500"
            className="experience-details"
          >
            <FaGitAlt size={25} style={{ color: "#dd452a" }} className="last" />

            <div className="verified-icon">
              <small className="text-light">Git/GitHub</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>

          {/* 12 */}
          <article
            data-aos="fade-up"
            data-aos-duration="4500"
            className="experience-details"
          >
            <RiVuejsFill
              size={25}
              style={{ color: "#dd452a" }}
              className="last"
            />

            <div className="verified-icon">
              <small className="text-light">Vue.js</small>
              <BsPatchCheckFill className="icon" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
