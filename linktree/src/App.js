import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.css";

import * as React from "react";

import { Avatar } from "primereact/avatar";

import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillChrome,
  AiFillHome,
  AiFillRightSquare,
} from "react-icons/ai";

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
        icon: "AiFillGithub",
      },
      {
        name: "My Linkedin",
        url: "https://www.linkedin.com/in/marco-vinciguerra-7ba365242/",
        icon: "AiOutlineLinkedin",
      },

      {
        name: "My portfolio website",
        url: "https://www.linkedin.com/in/marco-vinciguerra-7ba365242/",
        icon: "AiFillHome",
      },
      {
        name: "My CV",
        url: "https://mvinciguerra.notion.site/Side-projects-155b47302bf74029b9fe44fb213647de",
        icon: "AiFillChrome",
      },
      {
        name: "My Notion sideprojects documentation",
        url: "https://mvinciguerra.notion.site/Side-projects-155b47302bf74029b9fe44fb213647de",
        icon: "AiFillRightSquare",
      },
    ],
  };

  return (
    <div className="App">
      <div className="p-m-4" style={{ paddingTop: 15 }}>
        <div>
          <div
            className="p-d-flex p-jc-center p-ai-center"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
            <h1 className="p-m-2">{data.name}</h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p>{data.bio}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          ></div>
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
                    <button type="button" class="btn btn-primary">
                      <AiFillGithub /> {link.name}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
