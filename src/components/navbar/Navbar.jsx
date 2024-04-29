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
import { NavLink } from 'react-router-dom';

const NavbarCanvas = () => {
    const isActive = true;
    return (
        <>
            {' '}
            {['md'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    sticky="top"
                    className="bg-primary mb-auto color-light shadow"
                >
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink to="/">
                                <img
                                    src={novoblue}
                                    alt="brand-logo"
                                    title="go to home page"
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                />
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none'
                            }}
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
                                    <NavLink to="/">
                                        <img
                                            src={
                                                novoblue2
                                            }
                                            alt="brand-logo"
                                            title="go to home page"
                                            style={{
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </NavLink>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink
                                        to="/travel"
                                        className="d-flex flex-column align-items-sm-center px-3"
                                        title="Travel"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                    >
                                        <IoAirplane size="20" />
                                        Travel
                                    </NavLink>
                                    <NavLink
                                        to="/price"
                                        className="d-flex flex-column align-items-sm-center px-3"
                                        title="Prices"
                                        active={
                                            isActive
                                                ? isActive
                                                : ''
                                        }
                                    >
                                        <FaDollarSign size="20" />
                                        Price
                                    </NavLink>
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
