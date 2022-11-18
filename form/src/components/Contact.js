import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrk0h4p",
        "template_x5bmvhc",
        form.current,
        "nW6LUTi3pEck0RPd-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control--card  --flex-center --dir-column"
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
          ></input>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
          ></input>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit" className="--btn --btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
