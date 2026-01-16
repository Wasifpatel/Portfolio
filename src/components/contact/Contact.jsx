import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ipsh5uk",
      "template_8hsyt8y",
      form.current,
      "0JVtTVYN2tlBWZoaQ"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                wasifpatelofficial@gmail.com
              </span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wasifpatelofficial@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>

            </div>



            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+91 9175XXXXX</span>

              <a
                href="https://api.whatsapp.com/send?phone=919175125003&text=Hello, more information!"
                className="contact__button" target="_blank" rel="noopener noreferrer"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project/queries</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">

            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">E-mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Query</label>
              <textarea
                name="query"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter your query/request here"
                required
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              Send Message

              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                ...
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
