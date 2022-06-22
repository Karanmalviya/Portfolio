import "./Contact.css";
import { GrMail } from "react-icons/gr";
// import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7lkylt2",
      "template_nedz4rh",
      form.current,
      "tgrGnBfRaB-rG5hQF"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>karanmalviya258@gmail.com</h5>
            <a
              href="mailto:karanmalviya@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Karan Malviya</h5>
            <a
              href="https://www.linkedin.com/in/karanmalviya1/"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
