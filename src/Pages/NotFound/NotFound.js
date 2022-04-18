import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='py-5' style={{minHeight:'100vh'}}>
            <Container className='mt-5'>
                <h2 className='sec-title text-center'>404 Not Found</h2>
                <p className='text-center'>Please Try Again Valid Route or Visit Other Page</p>
            </Container>
        </div>
    );
};

export default NotFound;