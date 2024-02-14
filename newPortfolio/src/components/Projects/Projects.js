import React, { useEffect, useState } from "react";
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
import camera from "../../Assets/Projects/image8.png";
import amazScraper from "../../Assets/Projects/scraper.png";
import { encode } from "blurhash";

function Projects() {
  const [bitsOfCodeBlurhash, setBitsOfCodeBlurhash] = useState("");
  const [suicideBlurhash, setSuicideBlurhash] = useState("");
  const [cameraBlurhash, setCameraBlurhash] = useState("");
  const [editorBlurhash, setEditorBlurhash] = useState("");
  const [marcoApiBlurhash, setMarcoApiBlurhash] = useState("");
  const [leafBlurhash, setLeafBlurhash] = useState("");
  const [chatifyBlurhash, setChatifyBlurhash] = useState("");
  const [emotionBlurhash, setEmotionBlurhash] = useState("");
  const [amazScraperBlurhash, setamazScraperBlurhash] = useState("");

  useEffect(() => {
    // Load and encode the images as blurhash strings
    const loadAndEncodeImages = async () => {
      const bitsOfCodeData = await loadImageData(bitsOfCode);
      const suicideData = await loadImageData(suicide);
      const cameraData = await loadImageData(camera);
      const editorData = await loadImageData(editor);
      const marcoApiData = await loadImageData(marcoApi);
      const leafData = await loadImageData(leaf);
      const chatifyData = await loadImageData(chatify);
      const emotionData = await loadImageData(emotion);
      const amazScraperData = await loadImageData(amazScraper);

      setBitsOfCodeBlurhash(encode(bitsOfCodeData, 32, 32));
      setSuicideBlurhash(encode(suicideData, 32, 32));
      setCameraBlurhash(encode(cameraData, 32, 32));
      setEditorBlurhash(encode(editorData, 32, 32));
      setMarcoApiBlurhash(encode(marcoApiData, 32, 32));
      setLeafBlurhash(encode(leafData, 32, 32));
      setChatifyBlurhash(encode(chatifyData, 32, 32));
      setEmotionBlurhash(encode(emotionData, 32, 32));
      setamazScraperBlurhash(encode(amazScraperData, 32, 32));
    };

    loadAndEncodeImages();
  }, []);

  const loadImageData = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        resolve(imageData.data);
      };
      img.onerror = () => {
        reject(new Error("Failed to load image."));
      };
    });
  };

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
              imgPath={amazScraper}
              blurhash={amazScraperBlurhash}
              isBlog={false}
              title="YOSO-ai"
              description="Open source scraping library using Openai apis. This tool allows to automatically scrape full webpages in seconds instead of many minutes. This
repo has 6 branches, 2 forks and more than 35 stars"
              ghLink="https://github.com/VinciGit00/YOSO-ai"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              blurhash={bitsOfCodeBlurhash}
              isBlog={false}
              title="NBA stats"
              description="Python open source web App created with streamlit library for visualize every personal informations of players currently playing in the NBA"
              ghLink="https://github.com/VinciGit00/nba-platform"
              demo="https://vincigit00-nba-platform-main-ounnit.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              blurhash={suicideBlurhash}
              isBlog={false}
              title="Amazon web scraping"
              description="Open source streamlit web-app for scraping amazon webProduct for free using BeautifulSoup"
              ghLink="https://github.com/VinciGit00/Amazon-scraping"
              demo="https://vincigit00-amazon-scraping-app-nfzu99.streamlit.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camera}
              blurhash={cameraBlurhash}
              isBlog={false}
              title="Camera face recognition"
              description="This is an open source app for transforming an old laptop camera that can
              recognise human faces and send the pictures by email"
              ghLink="https://github.com/VinciGit00/camera_face_recognition"
              demo=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marcoApi}
              blurhash={marcoApiBlurhash}
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
              blurhash={leafBlurhash}
              isBlog={false}
              title="Money tracker notion"
              description="An app for tracking expenses with notion API"
              ghLink="https://github.com/VinciGit00/Personal-Stuff/tree/main/Flutter/MoneyTrackerNotion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              blurhash={emotionBlurhash}
              isBlog={false}
              title="Mum's shop"
              description="Flutter app for managing the warehouse of my mom's shop with barcode scanner"
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              blurhash={editorBlurhash}
              isBlog={false}
              title="Notes"
              description="A Flutter app with firebase connection to handle notes encrypted"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
