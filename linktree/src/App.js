import "./App.css";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillChrome,
  AiFillHome,
  AiFillRightSquare,
} from "react-icons/ai";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import { Avatar } from "primereact/avatar";

function App() {
  const colors = {
    github: "purple",
    linkedin: "blue",
    notion: "black",
    myWebsite: "red",
  };

  const data = {
    name: "Marco Vinciguerra",
    image: "https://avatars.githubusercontent.com/u/88108002?v=4",
    bio: "Master IT engineer student",
    links: [
      {
        name: "My Github",
        url: "https://github.com/VinciGit00",
        icon: AiFillGithub,
      },
      {
        name: "My Linkedin",
        url: "https://www.linkedin.com/in/marco-vinciguerra-7ba365242/",
        icon: AiOutlineLinkedin,
      },

      {
        name: "My portfolio website",
        url: "http://marcovincidev.altervista.org/",
        icon: AiFillHome,
      },
      {
        name: "My CV",
        url: "https://mvinciguerra.notion.site/Side-projects-155b47302bf74029b9fe44fb213647de",
        icon: AiFillChrome,
      },
      {
        name: "My Notion sideprojects documentation",
        url: "https://mvinciguerra.notion.site/Side-projects-155b47302bf74029b9fe44fb213647de",
        icon: AiFillRightSquare,
      },
    ],
  };
  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          params={{
            fpsLimit: 200,
            particles: {
              color: {
                value: "#6f42c1",
              },
              links: {
                enable: true,
                color: "#6f42c1",
                distance: 65,
              },
              move: {
                enable: true,
              },
            },
          }}
        />
        <div
          className="p-d-flex p-jc-center p-ai-center"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 className="p-m-2">{data.name}</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <p>{data.bio}</p>
        </div>
        <div className="p-d-flex p-jc-center p-ai-center">
          <div className="p-d-flex p-flex-column">
            {data.links.map((link) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <a href={link.url} target="_blank" rel="noreferrer">
                  <button className="button">
                    <link.icon /> {link.name}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
