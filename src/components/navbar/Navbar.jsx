import React from "react";
//import PropTypes from 'prop-types'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import novoblue from "../../imgs/logoblue.png";
import novoblue2 from "../../imgs/logoblue2.png";
const NavbarCanvas = () => {
  return (
    <>
      {" "}
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-primary mb-3 color-light"
        >
          <Container fluid>
            <Navbar.Brand>
              <img src={novoblue} alt="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={novoblue2} alt="brand-logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

Navbar.propTypes = {};

export default NavbarCanvas;
