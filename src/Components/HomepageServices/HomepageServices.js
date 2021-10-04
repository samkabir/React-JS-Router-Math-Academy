import React from 'react';
import { Card } from 'react-bootstrap';
import './HomepageServices.css';


const HomepageServices = (props) => {
    
    const{name, image, price, details} = props.homeService;
   
    return (
        <div className="servicescard">
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

export default HomepageServices;