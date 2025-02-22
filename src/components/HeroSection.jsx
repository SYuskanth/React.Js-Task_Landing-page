import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="hero-section py-5" style={{ marginTop: "76px" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#03045E" }}>
              Innovate with PheonixTech Solutions
            </h1>
            <p className="lead mb-4" style={{ color: "#023E8A" }}>
              We create smart and secure software to help your business grow and
              stand out online. Our solutions use the latest AI and cloud
              technology to make your work easier and more efficient. With
              user-friendly designs and powerful features, we ensure a seamless
              digital experience for your customers. Let's build the future
              together
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline-primary" size="lg">
                Learn More
              </Button>
            </div>
          </Col>
          <Col lg={6} className="position-relative">
            {/* Main Image */}
            <div className="hero-image-container">
              <img
                src="./public/hero4.png"
                alt="Hero"
                className="img-fluid hero-image"
              />
            </div>
            {/* Decorative Elements */}
            <div
              className="position-absolute"
              style={{
                top: "-20px",
                right: "-20px",
                width: "100px",
                height: "100px",
                background: "#0077B6",
                borderRadius: "50%",
                opacity: "0.1",
                zIndex: 0,
              }}
            ></div>
            <div
              className="position-absolute"
              style={{
                bottom: "-30px",
                left: "-30px",
                width: "150px",
                height: "150px",
                background: "#00B4D8",
                borderRadius: "50%",
                opacity: "0.1",
                zIndex: 0,
              }}
            ></div>
            {/* Floating Elements */}
            {/* <div
              className="floating-element position-absolute"
              style={{
                top: "20%",
                right: "10%",
                width: "40px",
                height: "40px",
                background: "#90E0EF",
                transform: "rotate(45deg)",
                animation: "float 6s ease-in-out infinite",
              }}
            ></div> */}
            <div
              className="floating-element position-absolute"
              style={{
                bottom: "15%",
                left: "5%",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#0077B6",
                opacity: "0.1",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
