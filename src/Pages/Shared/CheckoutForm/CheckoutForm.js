import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const CheckoutForm = () => {

    const checkout = (e) => {
        e.preventDefault();
        toast('thank you for the booking.')
    }
    return (

        <div className='py-5'>
            <Container>
                <div className='form-container mx-auto'>
                    <h2 className='sec-title'>Please Checkout</h2>
                    <Form onSubmit={checkout}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="text" placeholder="+880 123456789" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required type="text" placeholder="Address" />
                        </Form.Group>

                        <button className='card-btn' variant="primary" type="submit">
                            Checkout
                        </button>
                    </Form>
                </div>
                <ToastContainer></ToastContainer>
            </Container>
        </div>
    );
};

export default CheckoutForm;