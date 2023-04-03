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
import marcoApi from "../../Assets/Projects/image7.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title=" stats"
              description="Python open source web App created with streamlit library for visualize every personal informations of players currently playing in the NBA"
              ghLink="https://github.com/VinciGit00/nba-platform"
              demo="https://vincigit00-nba-platform-main-ounnit.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Amazon web scraping"
              description="Open source streamlit web-app for scraping amazon webProduct for free using BeautifulSoup"
              ghLink="https://github.com/VinciGit00/Amazon-scraping"
              demo="https://vincigit00-amazon-scraping-app-nfzu99.streamlit.app"
            />
          </Col>
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
              imgPath={marcoApi}
              isBlog={false}
              title="Marco's api"
              description="A list and a trial of api made with Flask"
              ghLink="https://github.com/VinciGit00/MarcosApi"
              demo="https://marcosapi.onrender.com/swagger/"
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
              title="Password app"
              description="Flutter app using AWS (dynamo and lambda functions) for managing passwords"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Mum's shop"
              description="Flutter app for managing the warehouse of my mom's shop with barcode scanner"
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
