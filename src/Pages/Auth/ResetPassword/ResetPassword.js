import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
const ResetPassword = () => {

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState('')
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)
        if (validEmail) {
            setEmail(e.target.value)
            setErrors('')
        } else {
            setErrors('Enter Valid Email')
            setEmail('')
        }

        if (e.target.value == '') {
            setErrors('')
        }
    }

    const resetPass = async (e) => {
        e.preventDefault();
        await sendPasswordResetEmail(email)
        toast('Password Reset Link Sended!')
    }
    if(error){
        console.log(error);
    }

    return (
        <div className='py-5'>

            <Container>
                <div className='form-container w-50 mx-auto py-5 px-5'>

                    <h2 className='sec-title text-center'>Reset Password!</h2>

                    <Form onSubmit={resetPass} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onChange={handleEmail} type="email" placeholder="Enter email" />
                            <Form.Text className="text-danger">
                                {errors}
                            </Form.Text>
                        </Form.Group>
                        <p>Remember the password?<Link to='/login'>Login </Link></p>
                        <button className='card-btn' variant="primary" type="submit">
                            Reset
                        </button>
                    </Form>
                    <ToastContainer></ToastContainer>
                </div>
            </Container>
        </div>
    );
};

export default ResetPassword;