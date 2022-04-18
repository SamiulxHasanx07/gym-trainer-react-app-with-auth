
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo-white.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth)

    const Logout = () => {
        signOut(auth);
    };
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     setScrollPosition(position);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    
    // const position = scrollPosition >=100;
    

    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" sticky='top'>
            <Container>
                <Link to='/'>
                    <img style={{ height: '45px' }} src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink className='me-3' to='/'>Home</CustomLink>
                        <CustomLink className='me-3' to='/checkout'>Checkout</CustomLink>
                        <CustomLink className='me-3' to='/blogs'>Blogs</CustomLink>
                        <CustomLink className='me-3' to='/about'>About</CustomLink>


                        {
                            user ? (<p style={{ cursor: "pointer" }} className='text-white logout me-3 m-0' onClick={Logout}>Logout</p>) : (<CustomLink className='me-3' to='/login'>Login</CustomLink>)
                        }

                        {
                            user ? "" : (<CustomLink className='me-3' to='/signup'>Register</CustomLink>)
                        }

                        <p className='text-white me-4  m-0' style={{ textDecoration: 'none' }}>{user ? 'Hi, ' : ''}{user ? user.displayName : ''}</p>
                        <img style={{ height: '45px', borderRadius: '100px' }} src={user?.photoURL} alt="" />
                        {/* <button className="btn btn-link text-white">Logout</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;