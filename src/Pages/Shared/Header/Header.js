
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo-white.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth)
console.log(user);

    const Logout = () => {
        signOut(auth);
    };


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <img style={{ height: '45px' }} src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink className='me-3' to='/'>Home</CustomLink>
                        <CustomLink className='me-3' to='/blogs'>Blogs</CustomLink>
                        <CustomLink className='me-3' to='/checkout'>Checkout</CustomLink>
                        
                        <CustomLink className='me-3' to='/signup'>Signup</CustomLink>

                        {
                            user?(<button className='text-white btn btn-link me-4 m-0' onClick={Logout}>Logout</button>) : (<CustomLink className='me-3' to='/login'>Login</CustomLink>)
                        }
                        
                        <p className='text-white me-4  m-0' style={{textDecoration:'none'}}>{user?.displayName}</p>
                        <img style={{height:'45px', borderRadius:'100px'}} src={user?.photoURL} alt="" />
                        {/* <button className="btn btn-link text-white">Logout</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;