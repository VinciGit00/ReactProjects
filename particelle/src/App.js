import * as React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import "./style.css";

export default function App() {
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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#000",
            },
            links: {
              enable: true,
              color: "#000",
              distance: 150,
            },
            move: {
              enable: true,
            },
          },
        }}
      />
    </div>
  );
}
