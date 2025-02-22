import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/Logo.svg"
            height="55"
            className="d-inline-block align-top me-3"
            alt="PheonixTech Logo"
          />
          <span className="fw-bold" style={{ color: "#03045E" }}>
            PheonixTech
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="text-primary">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-primary">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-primary">
              Pricing
            </Nav.Link>
            <Nav.Link href="#contact" className="text-primary">
              Contact
            </Nav.Link>
            <div className="d-flex align-items-center">
              <Button variant="outline-primary">Sign In</Button>
              <Button variant="primary" className="ms-2">
                Sign Up
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
