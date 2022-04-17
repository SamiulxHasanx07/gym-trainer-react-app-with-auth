import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleService.css';
const SingleService = ({ singleService }) => {
    const { service, price, description, img } = singleService;

    return (
        <Col>
            <Card className='pb-4 border-0' style={{borderRadius:'20px'}}>
                <Card.Img variant="top" src={img} className='w-100' />
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3 className='card-main-title'>{service}</h3>
                        <h3 className='custom-color card-main-title'>${price}/mo</h3>
                    </div>
                    <Card.Text>
                        {description.slice(0, 120)}
                    </Card.Text>
                    <div className='mt-4 d-flex justify-content-center'>
                        <button className='card-btn primary-bg font'>Book Now</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;