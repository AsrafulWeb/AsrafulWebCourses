import React, { useState } from 'react';
import { useAuth } from '../useAuth';

const SignIn = ({ setSignUp }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { gSignIn, passLogin, signInSignUpError } = useAuth();

    const handelPassSignIn = (e) => {
        passLogin(email, password)
        e.preventDefault()
        e.target.reset()
    }

    return (
        <form onSubmit={handelPassSignIn} className='signinForm d-block'>
            <br />
            <h2 className="text-center">Login your account</h2>
            <br />
            <button onClick={gSignIn} type='button' style={{ width: '100%', marginBottom: '20px' }} className="btn btn-outline-dark btn-sm">
                <img style={{ marginRight: "10px" }} src="https://img.icons8.com/color/30/000000/google-logo.png" alt="" />
                Sign In With Google
            </button>
            <br />
            <div class="form-group">
                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control loginFormEmail" id="loginEmail" aria-describedby="emailHelp" placeholder="Your Email" required />
            </div>
            <br />
            <div class="form-group">
                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control loginFormPassword" id="loginPassword" placeholder="Your Password" required />
            </div>
            {
                signInSignUpError && <div className="alert alert-danger">
                    {signInSignUpError}
                </div>
            }
            <div onClick={() => setSignUp(true)} style={{ cursor: 'pointer' }} className="text-secondary mt-2"><u> I don't have account</u></div>
            <br />
            <br />
            <div className="">
                <button type="submit" class="btn btn-primary float-right px-4 me-auto">Login</button>
            </div>
        </form>
    );
};

export default SignIn;