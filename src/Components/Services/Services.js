import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCards from '../ServicesCards/ServicesCards';
import './Services.css'

const Services = () => {
    const [serviceone, setServices] =useState([]);
    useEffect(() => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="cards-container">
            { serviceone.map(service => <ServicesCards
                key={serviceone.key}
                service={service}
            ></ServicesCards>)
            }
        </div>
    );
};

export default Services;