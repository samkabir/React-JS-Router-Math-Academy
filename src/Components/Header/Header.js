import React from 'react';
import { Container, Navbar } from 'react-bootstrap';


import { NavLink } from 'react-router-dom';
const mystyle = {
    color: "white",
    padding: "10px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "18px"
  };
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="navbar-custom">
                    <NavLink style={mystyle} to="/home">Home</NavLink>
                    <NavLink style={mystyle} to="/about">About</NavLink>
                    <NavLink style={mystyle} to="/services">Services</NavLink>
                    <NavLink style={mystyle} to="/contactus">Contact Us</NavLink>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;