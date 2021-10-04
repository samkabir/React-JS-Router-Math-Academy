import React from 'react';
import { Col } from 'react-bootstrap';
import './CompanyEthics.css';

const CompanyEthics = () => {
    return (
        <div className="mysection">
            <Col md="4">        
                <img src="https://mizar-elementor.42theme.com/wp-content/uploads/2020/12/1-icon.png" alt="" />
                <h4>Study Support</h4>
                <p>Tristique et egestas quis ipsum suspendisse commodo ultrices.</p>
            </Col>
            <Col md="4">
                <img src="https://mizar-elementor.42theme.com/wp-content/uploads/2020/12/2-icon.png" alt="" />
                <h4>Academic Skills</h4>
                <p>Quisque sagittis purus sit amet volutpat consequat mauris.</p>
            </Col>
            <Col md="4">
                <img src="https://mizar-elementor.42theme.com/wp-content/uploads/2020/12/3-icon.png" alt="" />
                <h4>Learning Online</h4>
                <p>Vitae nunc sed velit dignissim sodales ut tempus eu sem integer.</p>
            </Col>
        </div>
    );
};

export default CompanyEthics;