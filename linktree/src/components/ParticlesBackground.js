import Particles from "react-tsparticles";
import particleConfig from "./particle-config";
import React from "react";

const particlesBackground = () => {
  return <Particles params={particleConfig}></Particles>;
};

export default particlesBackground;
