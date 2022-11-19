import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "semantic-ui-react";

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
        <h1 className="--text-center">Contact me</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control--card  --flex-center --dir-column"
        >
          <label>
            <h3>Name and Surname</h3>
          </label>
          <Input
            focus
            type="text"
            name="user_name"
            required
            className="Input"
          ></Input>
          &nbsp;
          <label>
            <h3>Email</h3>
          </label>
          <Input
            type="email"
            name="user_email"
            required
            className="Input"
          ></Input>
          &nbsp;
          <label>
            <h3>Subject</h3>
          </label>
          <Input type="text" name="subject" required className="Input"></Input>
          &nbsp;
          <label>
            <h3>Message</h3>
          </label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          &nbsp;
          <button type="submit" className="--btn --btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
