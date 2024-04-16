import React from 'react';
//import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import novoblue from '../../imgs/logoblue.png';
import novoblue2 from '../../imgs/logoblue2.png';

import { IoAirplane } from 'react-icons/io5';
import { FaDollarSign } from 'react-icons/fa';

const NavbarCanvas = () => {
    return (
        <>
            {' '}
            {['md'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="bg-primary mb-auto color-light shadow"
                    fixed="top"
                >
                    <Container fluid>
                        <Navbar.Brand to="/home">
                            <img
                                src={novoblue}
                                alt="brand-logo"
                                title="go to home page"
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            data-bs-theme="dark"
                        >
                            <Offcanvas.Header
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    <img
                                        src={
                                            novoblue2
                                        }
                                        alt="brand-logo"
                                        title="go home"
                                    />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link
                                        to="#action1"
                                        className="d-flex flex-column align-items-sm-center px-3"
                                        title="Travel"
                                    >
                                        <IoAirplane size="20" />
                                        Travel
                                    </Nav.Link>
                                    <Nav.Link
                                        to="#action2"
                                        className="d-flex flex-column align-items-sm-center px-3"
                                        title="Prices"
                                    >
                                        <FaDollarSign size="20" />
                                        Prices
                                    </Nav.Link>
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
