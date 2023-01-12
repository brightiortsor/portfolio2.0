import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m5jj4ln",
      "template_ph13dep",
      form.current,
      "yzePNeFNS-PFVI6Vj"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 data-aos="fade-up" data-aos-duration="2000">
        Get in Touch
      </h5>
      <h2 data-aos="fade-up" data-aos-duration="2500">
        Contact Me
      </h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article
            data-aos="fade-right"
            data-aos-duration="2000"
            className="contact-option"
          >
            <MdOutlineEmail
              data-aos="fade-right"
              data-aos-duration="2000"
              className="option-icon"
            />
            <h4 data-aos="fade-right" data-aos-duration="2000">
              Email
            </h4>
            <h5 data-aos="fade-right" data-aos-duration="2500">
              iortsor@gmail.com
            </h5>
            <a
              data-aos="fade-right"
              data-aos-duration="3000"
              href="mailto:iortsor@gmail.com"
            >
              Send a Message
            </a>
          </article>

          <form
            data-aos="fade-right"
            data-aos-duration="2000"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              data-aos="fade-right"
              data-aos-duration="2000"
              type="text"
              name="name"
              placeholder="Enter Name"
              required
            />
            <input
              data-aos="fade-right"
              data-aos-duration="2500"
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <textarea
              data-aos="fade-right"
              data-aos-duration="3000"
              name="message"
              placeholder="Enter Message"
              required
            ></textarea>
            <button
              data-aos="fade-right"
              data-aos-duration="3500"
              type="submit"
              className="btn btn-primary btn-form"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
