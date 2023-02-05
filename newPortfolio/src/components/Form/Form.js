import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Input } from "semantic-ui-react";
function Form() {
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
    <div>
      <Container fluid className="about-section">
        <Container>
          <section>
            <div className="container">
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Contact <strong className="purple">me</strong>
              </h1>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="--form-control--card  --flex-center --dir-column form-main"
                autoComplete="off"
              >
                <div className="form-group">
                  <label>
                    <h3>
                      Name and <strong className="purple">Surname</strong>
                    </h3>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="Input"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <h3>Email</h3>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="Input"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <h3>Subject</h3>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="Input"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <h3>Message</h3>
                  </label>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    className="Input Message"
                  ></textarea>
                </div>
                <br />
                <button type="submit" className="bottone">
                  Send message
                </button>
              </form>
            </div>
          </section>
        </Container>
      </Container>
      <Particle />
    </div>
  );
}

export default Form;
