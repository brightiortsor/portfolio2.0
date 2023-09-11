import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";

const ProjectsMobile = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnHover: true,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {data.map(({ id, img, title, demo }) => {
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
      </Slider>
    </div>
  );
};

export default ProjectsMobile;
