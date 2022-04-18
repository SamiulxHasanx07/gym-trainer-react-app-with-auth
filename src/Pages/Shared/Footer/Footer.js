import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer className='pt-5 pb-3 text-white'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <img className='mb-5' style={{ height: '50px' }} src={logo} alt="" />
                        <h2>Our Contacts</h2>
                        <p className='m-0'><FontAwesomeIcon className="me-2"icon={faPhone}/>: +880 1722-058000</p>
                        <p className='m-0'><FontAwesomeIcon className="me-2"icon={faEnvelope}/>: sam.coach2022@gmail.com</p>
                        <p className='m-0'><FontAwesomeIcon className="me-2"icon={faLocationPin}/>: Padma-abasik, Boalia, Rajshahi</p>

                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h2 className='pb-1 mt-4 mt-md-4 mt-lg-0 pb-md-3'>Services</h2>

                        <div className='footer-sec-text'>
                            <Link to='' className='m-0 d-block'>Work Out</Link>
                            <Link to='' className='m-0 d-block'>Body Fit</Link>
                            <Link to='' className='m-0 d-block'>Weight Loss</Link>
                            <Link to='' className='m-0 d-block'>Personal Training</Link>
                            <Link to='' className='m-0 d-block'>Daily Track</Link>
                            <Link to='' className='m-0 d-block'>Nutrition</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h2 className='pb-1 mt-4 mt-md-4 mt-lg-0 pb-md-3'>Other Link</h2>

                        <div className='footer-sec-text'>
                            <Link to='' className='m-0 d-block'>Home</Link>
                            <Link to='' className='m-0 d-block'>Services</Link>
                            <Link to='' className='m-0 d-block'>Blogs</Link>
                            <Link to='' className='m-0 d-block'>Daily Track</Link>
                            <Link to='' className='m-0 d-block'>Routine</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h2 className='pb-1 mt-4 mt-md-4 mt-lg-0 pb-md-3'>Social Link</h2>
                        <Link to=''>
                            <div className='social-link'>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='social-link d-flex'>
                                <div>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col sm={12} lg={6}>
                        <div>
                            <p>Copyright &copy; 2022 || Alright Reserved</p>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className='links text-left text-md-end'>
                            <Link to=''>Privacy</Link>
                            <Link to=''>Terms</Link>
                            <Link to=''>Sitemap</Link>
                            <Link to=''>Help</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;