import React from 'react';
import { Form } from 'react-bootstrap';
import './SingleSelect.css';
const SingleSelect = ({ selectedService }) => {
    const { img, service, price } = selectedService;
    return (
        <div className='single-selected d-flex align-items-center justify-content-between w-75 mx-auto'>
            <div className='selected-img' style={{ overFlow: 'hidden' }}>
                <img src={img} alt="" className='w-100' />
            </div>
            <h4>{service}</h4>
            <h4>{price}</h4>

            <div className='d-flex align-items-center'>
                <Form.Control type="Number" placeholder="month" className='sl-qty' style={{ width: '70px' }} />
                <h4 className='m-0 ms-3'>Month</h4>
            </div>
            <button className='card-btn selected-service-btn'>Update</button>
            
        </div>
    );
};

export default SingleSelect;