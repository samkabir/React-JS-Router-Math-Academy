import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contactus-form">
            <Container fluid>
                <Row>
                    <Col md="6">
                        <h2>Contact Us Now!!</h2>
                        <p>Admissions are a 3 step process</p>
                        <br />
                        <h4>Address</h4>
                        <p>Cambridge University, London, United Kingdom</p>
                        <p>Dhaka University, Math Department, Dhaka Bangladesh</p>
                        <br />
                        <h4>Phone Number and Email</h4>
                        <p>+880135513123</p>
                        <p>3point145@math.edu.bd</p>
                    </Col>
                    <Col md="6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;