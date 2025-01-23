import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { bucketListItems } from "./data";

function BucketList() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">100 Things </strong> to Do Before I Die
        </h1>
        <p style={{ color: "white" }}>
          My personal bucket list of goals and experiences to achieve in life
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {bucketListItems.map((category, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title className="purple">{category.category}</Card.Title>
                  <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
                    {category.items.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "10px" }}>
                        <input
                          type="checkbox"
                          checked={item.completed}
                          readOnly
                          style={{ marginRight: "10px" }}
                        />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default BucketList; 