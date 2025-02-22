import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
//abc
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-3">
      <Container>
        <Row className="gy-4 text-center">
          <Col md={4}>
            <div className="footer-card about-section">
              <div className="footer-logo-background">
                <img
                  src="/Logo.svg"
                  alt="PheonixTech Logo"
                  className="footer-logo"
                />
              </div>
              <h5
                className="mb-3"
                style={{ color: "#90E0EF", position: "relative" }}
              >
                About PheonixTech
              </h5>
              <p style={{ position: "relative" }}>
              PhoenixTech Solutions is a technology startup specializing in AI, Machine Learning, website development, and digital marketing. We create AI-powered solutions, intelligent automation, and cutting-edge web technologies to help businesses grow. Our data-driven marketing strategies enhance online visibility and engagement, driving digital success.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-card">
              <h5 className="mb-4" style={{ color: "#90E0EF" }}>
                Quick Links
              </h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none mb-2 d-block footer-link"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-white text-decoration-none mb-2 d-block footer-link"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-white text-decoration-none mb-2 d-block footer-link"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white text-decoration-none mb-2 d-block footer-link"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-card">
              <h5 className="mb-4" style={{ color: "#90E0EF" }}>
                Connect With Us
              </h5>
              <div className="d-flex justify-content-center gap-3 social-icons">
                <a href="#" className="text-white fs-4 social-icon">
                  <FaFacebook />
                </a>
                <a href="#" className="text-white fs-4 social-icon">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white fs-4 social-icon">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-white fs-4 social-icon">
                  <FaInstagram />
                </a>
              </div>
              <div className="mt-4 contact-info">
                <p className="mb-1" style={{ color: "#90E0EF" }}>
                  Contact Us
                </p>
                <p className="mb-0 contact-detail">
                  Email: info@pheonixtech.com
                </p>
                <p className="mb-0 contact-detail">Phone: +94 770 000 011</p>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: "#90E0EF" }} />
        <Row>
          <Col className="text-center">
            <p className="mb-0 copyright">
              © 2025 PheonixTech. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
