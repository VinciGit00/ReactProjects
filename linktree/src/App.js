import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.css";

import Particles from "react-tsparticles";

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
        icon: "github",
      },
      {
        name: "My Linkedin",
        url: "https://www.linkedin.com/in/marco-vinciguerra-7ba365242/",
        icon: "linkedin",
      },

      {
        name: "My portfolio website",
        url: "https://www.linkedin.com/in/marco-vinciguerra-7ba365242/",
        icon: "myWebsite",
      },
      {
        name: "My Notion sideprojects documentation",
        url: "https://mvinciguerra.notion.site/Side-projects-155b47302bf74029b9fe44fb213647de",
        icon: "notion",
      },
    ],
  };
  return (
    <div className="p-m-4" style={{ paddingTop: 15 }}>
      <Particles />
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
          {" "}
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
                  <button type="button" class="btn btn-warning">
                    {link.name}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
