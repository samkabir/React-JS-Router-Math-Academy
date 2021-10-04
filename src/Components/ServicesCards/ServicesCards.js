import React from 'react';
import { Card } from 'react-bootstrap';
import './ServicesCards.css'



const ServicesCards = (props) => {
    const{name, image, price, details} = props.service;
    return (
        <div className="cards-design">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <h4>Price: $ {price}</h4>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServicesCards;