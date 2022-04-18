import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    useEffect(() => {
        if (hookError) {
            console.log(hookError)
            switch (hookError?.code) {
                case "auth/email-already-in-use":
                    toast("User Already Exists! Login Please!");
                    break;
                case "auth/internal-error":
                    toast("Inernal Error Please Try Again!");
                    break;
                case "auth/email-already-exists":
                    toast('This user already exists! Login Please!');
                    break;
                default:

            }

        }
    })

    const handleName = (e) => {
        const name = e.target.value;
        const validate = name.length >= 2;

        if (validate) {
            setUserInfo({ ...userInfo, name: e.target.value })
            setErrors({ ...errors, name: '' })
        } else {
            setErrors({ ...errors, name: 'Enter Valid Name' })
        }
        if (e.target.value == '') {
            setErrors({ ...errors, name: '' })
        }
    }

    const handleEmal = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: '' })
        } else {
            setErrors({ ...errors, email: 'Enter Valid Email' })
            setUserInfo({ ...userInfo, email: '' })
        }

        if (e.target.value == '') {
            setErrors({ ...errors, email: '' })
        }
    }

    const handlePassword = e => {
        const passwordChk = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        const validPass = passwordChk.test(e.target.value);
        if (validPass) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: '' })
        } else {
            setErrors({ ...errors, password: 'Minimum six characters, at least one letter, one number and one special character' })
        }

        if (e.target.value == '') {
            setErrors({ ...errors, password: '' })
        }
    }
    const handleConfirmPass = e => {
        const validateConfirmPass = userInfo.password === e.target.value;
        if (validateConfirmPass) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            setErrors({ ...errors, confirmPassword: '' })
        } else {
            setUserInfo({ ...userInfo, confirmPassword: '' })
            setErrors({ ...errors, confirmPassword: 'Password Not Match' })
        }

        if (e.target.value == '') {
            setErrors({ ...errors, confirmPassword: '' })
        }
    }
    if (updating) {
        toast('please wait');
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/checkout';


    const signup = async (e) => {
        e.preventDefault();
        const { name } = userInfo;
        await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        await updateProfile({ displayName: name });
    }

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])
    return (
        <div className='signup py-5'>
            <Container>
                <div className='form-container mx-auto'>
                    <h2 className='sec-title text-center'>Please Signup!</h2>
                    <Form onSubmit={signup}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onChange={handleName} type="text" placeholder="Enter Name" />
                            <Form.Text className="text-danger mt-2">
                                {errors?.name}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onChange={handleEmal} type="email" placeholder="Enter email" />
                            <Form.Text className="text-danger">
                                {errors?.email}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required onChange={handlePassword} type="password" placeholder="Password" />
                            <Form.Text className="text-danger">
                                {errors?.password}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required onChange={handleConfirmPass} type="password" placeholder="Confirm Password" />
                            <Form.Text className="text-danger">
                                {errors?.confirmPassword}
                            </Form.Text>
                        </Form.Group>
                        <button className='card-btn' variant="primary" type="submit">
                            Signup
                        </button>
                    </Form>
                    <p className='mt-3'>Already Have an account? {<Link to='/login'>Login</Link>}</p>

                    {/* section divider */}

                    <div className="section-devide d-flex align-items-center">
                        <div></div>
                        <p className='mt-3'>Or</p>
                        <div></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer></ToastContainer>
                </div>
            </Container>
        </div >
    );
};

export default Signup;