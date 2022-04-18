import React from 'react';
import { Container } from 'react-bootstrap';
import Blog from './Blog/Blog';

const Blogs = () => {
    return (
        <div className='blogs py-5'>
            <Container>
                <h2 className='sec-title text-center'>Questions & Answers</h2>
                <Blog></Blog>
            </Container>
        </div>
    );
};

export default Blogs;