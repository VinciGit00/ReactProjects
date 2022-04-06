import React from "react";
import timelineData from "./data";
import TimelineItem from "./timelineItem";
import "./index.scss";

const Work = () =>
  timelineData.length > 0 && (
    <div className="container contact-page">
      <div className="timeline-container">
        <div className="text-zone">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );

export default Work;
