import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Navbar fixed="bottom" bg="dark" variant="dark" >
                <Container fluid>
                    <Row>
                        <Col md="6">1 of 2</Col>
                        <Col md="6">2 of 2</Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;