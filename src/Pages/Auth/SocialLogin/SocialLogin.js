import React, { useEffect, useState } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

import googleImg from '../../../images/social/google-img.png';
import facebookImg from '../../../images/social/facebook.png';
import githubImg from '../../../images/social/github.png';
import { useLocation } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, FacebookLoading, facebookError] = useSignInWithFacebook(auth);

    const [newError, setNewError] = useState('')

    useEffect(() => {
        if (googleError) {
            setNewError(googleError?.code)
        }
    }, [googleError])

    useEffect(() => {
        if (githubError) {
            setNewError(githubError?.code)
        }
    }, [githubError])

    useEffect(() => {
        if (facebookError) {
            setNewError(facebookError?.code)
        }
    }, [facebookError])

    useEffect(() => {
        switch (newError) {
            case "auth/popup-closed-by-user":
                toast("Popup Closed Please Try Again");
                break;
            case "auth/invalid-email":
                toast('invalid email!, provide valid email');
                break;
            case "auth/email-already-exists":
                toast('This user already exists!');
                break;
            default:
            // toast('Something went wrong try again!');

        }
    }, [newError])

    const location = useLocation();
    const loginPage = location.pathname == '/login';

    return (
        <div>
            <div className="other-signup">
                <div className='d-block d-md-flex align-items-center justify-content-center'>
                    <button onClick={() => signInWithGoogle()} className='btn'>
                        <img src={googleImg} alt="" />
                        Google {loginPage?'Login':'Signup'}
                    </button>
                    <button onClick={() => signInWithFacebook()} className='btn'>
                        <img src={facebookImg} alt="" />
                        Facebook {loginPage?'Login':'Signup'}
                    </button>
                    <button onClick={() => signInWithGithub()} className='btn'>
                        <img src={githubImg} alt="" />
                        Github {loginPage?'Login':'Signup'}
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;