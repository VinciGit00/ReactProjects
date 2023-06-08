import React from "react";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <p>{data.date}</p>
      <p>{data.date2}</p>
      <p>{data.paragraph}</p>
      <p>{data.first}</p>
      <p>
        {data.second && (
          <a
            href={data.second}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            {data.second}
          </a>
        )}
      </p>
      <p>{data.third}</p>

      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;
