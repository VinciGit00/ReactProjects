import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a master's degree student in data science data engineering
              master's course. I am currently studying deep learning, data
              cleaning and data engineering.
              <br />
              <br />
              I am currently working at{" "}
              <b className="purple">
                <a 
                  href="https://scrapegraphai.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  https://scrapegraphai.com
                </a>
              </b>
              <br />
              <br />
              My main interests are the study of &nbsp;
              <i>
                <b className="purple">python </b>
              </i>
              and its application with &nbsp;
              <i>
                <b className="purple">Pytorch </b>.
              </i>
              <i>and </i>
              <i>
                <b className="purple">tensorflow </b>.
              </i>
              <br />
              <br />
              In addition to that I know &nbsp;
              <i>
                <b className="purple">
                  Java, C, SQL, Flutter, Firebase, some react and HTML{" "}
                </b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VinciGit00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marco-vinciguerra-7ba365242/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
