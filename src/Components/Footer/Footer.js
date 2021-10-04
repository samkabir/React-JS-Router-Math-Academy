import React from 'react';
// import { Navbar } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            
                <div className="footer-container">
                    <div className="footer-design">
                        <h6>Address</h6>
                        <p>Dhaka University, Math Department, Dhaka Bangladesh</p>
                        <p>+880135513123</p>
                        <p>3point145@math.edu.bd</p>
                    </div> 
                    <div className="footer-design">
                        <h6>Some Important Links</h6>
                        <p>FAQ</p>
                        <p>Weekly Quiz winners</p>
                        <p>National Math Olympiad Champions List</p>
                    </div>
                </div>  
            
        </div>
    );
};

export default Footer;