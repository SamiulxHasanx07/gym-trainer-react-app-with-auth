import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo-white.png';

const Footer = () => {
    return (
        <footer className='pt-5 pb-3 text-white'>
            <Container>
                <Row>
                    <Col sm='12' md="12" lg="3">
                        <img className='mb-5' style={{ height: '50px' }} src={logo} alt="" />
                        <p>Phone: +880 1722-058000</p>
                        <p>Mail: sam.coach2022@gmail.com</p>

                    </Col>
                    <Col sm='12' md="12" lg="3">
                        <h2 className='pb-4'>Services</h2>

                        <div className='footer-sec-text'>
                            <Link to='' className='m-0 d-block'>Work Out</Link>
                            <Link to='' className='m-0 d-block'>Body Fit</Link>
                            <Link to='' className='m-0 d-block'>Weight Loss</Link>
                            <Link to='' className='m-0 d-block'>Personal Training</Link>
                            <Link to='' className='m-0 d-block'>Daily Track</Link>
                            <Link to='' className='m-0 d-block'>Nutrition</Link>
                        </div>
                    </Col>
                    <Col sm='12' md="12" lg="3">
                        <h2 className='pb-4'>Other Link</h2>

                        <div className='footer-sec-text'>
                            <Link to='' className='m-0 d-block'>Home</Link>
                            <Link to='' className='m-0 d-block'>Services</Link>
                            <Link to='' className='m-0 d-block'>Blogs</Link>
                            <Link to='' className='m-0 d-block'>Daily Track</Link>
                            <Link to='' className='m-0 d-block'>Routine</Link>
                        </div>
                    </Col>
                    <Col sm='12' md="12" lg="3">
                        <h2 className='pb-4'>Social Link</h2>
                        <Link to=''>
                            <div className='social-link'>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='social-link'>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <div className='d-flex justify-content-between mt-5'>
                    <div>
                        <p>Copyright &copy; 2022 || Alright Reserved</p>
                    </div>
                    <div className='links'>
                        <Link to=''>Privacy</Link>
                        <Link to=''>Terms</Link>
                        <Link to=''>Sitemap</Link>
                        <Link to=''>Help</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;