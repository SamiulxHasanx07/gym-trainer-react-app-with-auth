import React from 'react';
import { Container } from 'react-bootstrap';
import CheckoutForm from '../Shared/CheckoutForm/CheckoutForm';
import SelectedServices from "./SelectedServices/SelectedServices";
const Checkout = () => {
    return (
        <div className='py-5'>
            <Container>
                <SelectedServices></SelectedServices>
            </Container>
            <CheckoutForm></CheckoutForm>
        </div>
    );
};

export default Checkout;