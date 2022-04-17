import React from 'react';

import googleImg from '../../../images/social/google-img.png';
import facebookImg from '../../../images/social/facebook.png';
import githubImg from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, FacebookLoading, facebookError] = useSignInWithFacebook(auth);

    return (
        <div className="other-signup">
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
    );
};

export default SocialLogin;