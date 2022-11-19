import "./App.css";
import Contact from "./components/Contact";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {
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
    <div>
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
      <Contact></Contact>
    </div>
  );
}

export default App;
