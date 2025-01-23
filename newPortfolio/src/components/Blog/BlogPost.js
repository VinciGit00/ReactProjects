import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { blogPosts } from "./data";
import benderImage from "../../Assets/Bender_Rodriguez.png";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  // Function to format content with proper paragraphs and lists
  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      // Skip empty lines
      if (!paragraph.trim()) return null;
      
      // Check if it's a list item
      if (paragraph.trim().startsWith('-')) {
        return (
          <li key={index} style={{ marginBottom: "10px" }}>
            {paragraph.trim().substring(1)}
          </li>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} style={{ marginBottom: "20px" }}>
          {paragraph.trim()}
        </p>
      );
    });
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <Card className="project-card-view">
              <Card.Img 
                variant="top" 
                src={benderImage} 
                alt="blog-img"
                style={{ height: "300px", objectFit: "contain", padding: "20px" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "2em", marginBottom: "20px" }}>
                  {post.title}
                </Card.Title>
                <div style={{ textAlign: "justify" }}>
                  {formatContent(post.fullContent)}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogPost; 