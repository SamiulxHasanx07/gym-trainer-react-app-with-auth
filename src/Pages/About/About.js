import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import photo from '../../images/sam-photo.jpg';
const About = () => {
    return (
        <div className='about-page py-5'>
            <Container>
                <h2 className='sec-title text-center'>About Me</h2>
                <div className="about-section py-5">
                    <Row className='align-items-center'>
                        <Col sm={12} md={6}>
                            <h2 className='sec-title text-start'>HI,<br />THIS IS SAMIUL HASAN</h2>
                            <p>My goal is to become a fullstack web developer, and I want to start my career as a web developer. I hope these experiences will help me a lot to start Job life. I am ready to work hard to reach my goal.</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className='about-img d-flex justify-content-center' >
                                <img src={photo} className="w-75" alt="" style={{border:'4px solid #010718'}}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;