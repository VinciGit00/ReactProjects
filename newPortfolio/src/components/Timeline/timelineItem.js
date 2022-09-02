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
      <p>{data.second}</p>
      <p>{data.third}</p>

      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;
