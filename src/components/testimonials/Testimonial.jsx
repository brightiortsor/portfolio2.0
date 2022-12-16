import "./Testimonial.css";
import IMG1 from "../../assets/avatar1.jpg";
import IMG2 from "../../assets/avatar2.jpg";
import IMG3 from "../../assets/avatar3.jpg";
import IMG4 from "../../assets/avatar4.jpg";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    image: IMG1,
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga nobis, qui modi provident animi dolore aliquid maxime tempore. Nulla?",
  },
  {
    id: 2,
    image: IMG2,
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga nobis, qui modi provident animi dolore aliquid maxime tempore. Nulla?",
  },
  {
    id: 3,
    image: IMG3,
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga nobis, qui modi provident animi dolore aliquid maxime tempore. Nulla?",
  },
  {
    id: 4,
    image: IMG4,
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga nobis, qui modi provident animi dolore aliquid maxime tempore. Nulla?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>What People are Saying</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial-container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client-avatar">
                <img src={image} alt="client avatar" />
              </div>
              <div className="client-info">
                <h5 className="client-name">{name}</h5>
                <small className="client-review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
