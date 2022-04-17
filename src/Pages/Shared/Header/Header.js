import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-white.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <img style={{height:'45px'}} src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink className='me-3' to='/'>Home</CustomLink>
                        <CustomLink className='me-3' to='/blogs'>Blogs</CustomLink>
                        <CustomLink className='me-3' to='/checkout'>Checkout</CustomLink>
                        <CustomLink className='me-3' to='/login'>Login</CustomLink>
                        <CustomLink className='me-3' to='/signup'>Signup</CustomLink>
                        <CustomLink to='/logout'>Logout</CustomLink>
                        {/* <button className="btn btn-link text-white">Logout</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;