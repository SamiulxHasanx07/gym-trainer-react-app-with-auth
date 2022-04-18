import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
// import googleImg from '../../../images/social/google-img.png';
// import facebookImg from '../../../images/social/facebook.png';
// import githubImg from '../../../images/social/github.png';
const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [user, loading, hookError] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        createUser,
        signupLoading,
        signinError,
    ] = useSignInWithEmailAndPassword(auth);

    const [outSideError, setOutSideError] = useState('')
    useEffect(() => {
        if (signinError) {
            setOutSideError(signinError?.code)
        }
    }, [signinError])

    useEffect(() => {
        switch (outSideError) {
            case "auth/wrong-password":
                toast("Invalid Password please Try Again!");
                setOutSideError('')
                break;
            case "auth/user-not-found":
                toast('User Not found Please try again!');
                setOutSideError('')
                break;
            case "auth/invalid-email":
                toast('invalid email!, provide valid email');
                setOutSideError('')
                break;
            case "auth/email-already-exists":
                toast('This user already exists!');
                setOutSideError('')
                break;
            default:
            // toast('something went wrong')

        }
    }, [outSideError])
    // const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    // const [signInWithFacebook, facebookUser, FacebookLoading, facebookError] = useSignInWithFacebook(auth);

    // const [newError, setNewError] = useState({ emailError: '', passError: '', otherError: '' })
    // useEffect(() => {
    //     if (googleError) {
    //         switch (googleError?.code) {
    //             case "auth/invalid-email":
    //                 toast('invalid email!, provide valid email');
    //                 break;
    //             case "auth/email-already-exists":
    //                 toast('This user already exists!');
    //                 break;
    //             default:
    //                 toast('Something went wrong please try again')
    //         }
    //     }
    // }, [googleError])


    const handleEmal = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: '' })
        }else{
            setErrors({ ...errors, email: 'Enter Valid Email' })
            setUserInfo({ ...userInfo, email: '' })
        }

        if(e.target.value == ''){
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
            setErrors({ ...errors, password: 'Hints: Password Shoud be Minimum six characters, at least one letter, one number and one special character' })
        }
        if(e.target.value == ''){
            setErrors({ ...errors, password: '' })
            
        }
    }


    const login = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])


    return (
        <div className='login py-5'>
            <Container>
                <div className='form-container mx-auto'>
                    <h2 className='sec-title text-center'>Please Login!</h2>
                    <h2 className='sec-title text-center'> </h2>
                    <Form onSubmit={login}>
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
                        <button className='card-btn' variant="primary" type="submit">
                            Login
                        </button>
                    </Form>
                    <p className='mt-3'>Forgot Password? {<Link to='/resetpass'>Reset Password</Link>}</p>
                    <p className='mt-3'>Don't have account? {<Link to='/signup'>Signup</Link>}</p>

                    {/* section divider */}

                    <div className="section-devide d-flex align-items-center">
                        <div></div>
                        <p className='mt-3'>Or</p>
                        <div></div>
                    </div>

                    {/* <div className="other-signup">
                        <div className='d-flex align-items-center justify-content-center'>
                            <button onClick={() => signInWithGoogle()} className='btn'>
                                <img src={googleImg} alt="" />
                                Google Login
                            </button>
                            <button onClick={() => signInWithFacebook()} className='btn'>
                                <img src={facebookImg} alt="" />
                                Facebook Login
                            </button>
                            <button onClick={() => signInWithGithub()} className='btn'>
                                <img src={githubImg} alt="" />
                                Github Login
                            </button>
                        </div>
                    </div>
                    */}
                    <ToastContainer />
                    <SocialLogin></SocialLogin>
                </div>
            </Container>
        </div>
    );
};

export default Login;