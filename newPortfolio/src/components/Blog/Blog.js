import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { blogPosts } from "./data";
import benderImage from "../../Assets/Bender_Rodriguez.png";

function Blog() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog </strong>
        </h1>
        <p style={{ color: "white" }}>
          My personal blog about tech, data science, and development
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogPosts.map((post, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="project-card-view">
                <Card.Img 
                  variant="top" 
                  src={benderImage} 
                  alt="blog-img"
                  style={{ height: "200px", objectFit: "contain", padding: "20px" }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {post.preview}
                  </Card.Text>
                  <Link
                    to={`/blog/${index}`}
                    className="btn btn-primary"
                  >
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog; 