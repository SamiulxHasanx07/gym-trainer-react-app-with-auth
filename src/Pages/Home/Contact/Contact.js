import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Contact = () => {
    const handleContact = (e) =>{
        e.preventDefault();
    }
    return (
        <div className='py-5'>
            <Container>
                <div className="form-container mx-auto">
                    <h2 className='sec-title text-center pb-3'>Contct With Me</h2>
                    <Form onSubmit={handleContact}>
                        <div className='d-flex justify-content-between'>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Jhon Doe" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <div className='d-flex justify-content-center mt-4'>
                            <button className='card-btn'>Send Message</button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;