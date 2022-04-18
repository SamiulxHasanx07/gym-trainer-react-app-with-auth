import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleLatestBlog.css';
const SingleLatestBlog = ({ singleBlog }) => {
    const { title, blog, img } = singleBlog;
    return (
        <Col>
            <Card className='p-0 pb-4 border-0'>
                <div className='px-2 py-2'>
                    <Card.Img variant="top" className='img-fluid' src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{title.slice(0, 30)}{"..."}</Card.Title>
                    <Card.Text>
                        {blog.slice(0,80)}{'...'}
                    </Card.Text>
                    <button className='card-btn'>Read Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleLatestBlog;