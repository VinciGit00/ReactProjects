import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/image1.png";
import emotion from "../../Assets/Projects/image2.png";
import editor from "../../Assets/Projects/image3.png";
import chatify from "../../Assets/Projects/image4.png";
import suicide from "../../Assets/Projects/image5.png";
import bitsOfCode from "../../Assets/Projects/image6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Notes"
              description="A Flutter app with firebase connection to handle notes encrypted"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Money tracker notion"
              description="An app for tracking expenses with notion API"
              ghLink="https://github.com/VinciGit00/Personal-Stuff/tree/main/Flutter/MoneyTrackerNotion"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="1 tier react sushi restaurant mockup"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/VinciGit00/ReactProjects/tree/main/React/react_boostrap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="React calculator"
              description="A simple react calculator"
              ghLink="https://github.com/VinciGit00/ReactProjects/tree/main/React/calcolatrice"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Task organizer"
              description="Flutter app with firebase and providers for managing TODO tasks"
              ghLink="https://github.com/VinciGit00/Personal-Stuff/tree/main/Flutter/provider"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Screen dimension in real time"
              description="Web app that returns in real time the screen dimensions"
              ghLink="https://github.com/VinciGit00/FlutterProjects/tree/main/screen_dimension"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
