import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CompanyEthics from '../CompanyEthics/CompanyEthics';
import HomepageServices from '../HomepageServices/HomepageServices';
import { useEffect } from 'react';
import { useState } from 'react';
import './Homepage.css';

const Homepage = () => {
    const [service, setServices] =useState([]);
    useEffect(() => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const homeServices = service.slice(0, 4);
    return (
        <div>
            <Container fluid>
                <Row>
                    <CompanyEthics></CompanyEthics>
                </Row>
            </Container>
            <div className="services">
                <div className="services-section">
                    {
                        homeServices.map(homeService => <HomepageServices
                            key={homeService.key}
                            homeService={homeService}
                        ></HomepageServices>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Homepage;