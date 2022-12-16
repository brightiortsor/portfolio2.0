import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="option-icon" />
            <h4>Email</h4>
            <h5>iortsor@gmail.com</h5>
            <a href="mailto:iortsor@gmail.com">Send a Message</a>
          </article>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Enter Name" required />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary btn-form">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
