import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Deep Learning",
          "Data scientist",
          "Open Source Contributor",
          "CTO and cofounder of Sgrapegraphai",
          "CTO and cofounder of Thayer Inc",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
