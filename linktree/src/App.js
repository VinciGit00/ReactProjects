import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

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
    bio: "Master IT engeneer student",
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
        name: "My Notion sideprojects documentation",
        url: "https://www.linkedin.com/in/marco-vinciguerra-7ba365242/",
        icon: "notion",
      },
      {
        name: "My portfolio website",
        url: "https://www.linkedin.com/in/marco-vinciguerra-7ba365242/",
        icon: "myWebsite",
      },
    ],
  };
  return (
    <div className="p-m-4">
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
      <div className="p-d-flex p-jc-center p-ai-center">
        <p>{data.bio}</p>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column">
          {data.links.map((link) => (
            <a href={link.url} target="_blank" rel="noreferrer">
              <Button
                className="p-m-2 p-button-outlined"
                style={{ color: colors[link.icon] }}
              >
                <i className={"pi pi-${link.icon} p-px-3"}></i>
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
