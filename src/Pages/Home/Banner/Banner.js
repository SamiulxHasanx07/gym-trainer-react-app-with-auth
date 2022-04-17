import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hero from '../../../images/banner/hero-1.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner-section py-5' style={{background:`url(${hero}) no-repeat`}}>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <div className='banner-text'>
                            <h2 className='text-white'>Hi, This is SAM</h2>
                            <h3 className='text-white m-0'>Professional GYM Trainer</h3>
                            <p className='text-white'>Keep Your Body Stronger, Get the best result from me. In just 42 days I'll take you from feeling frustrated with your current trajectory, to feeling proud of the positive habits you've built</p>
                            <button className='custom-btn'>Explore More</button>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} >
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;