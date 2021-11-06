import React, { useState } from 'react';
import { useAuth } from '../useAuth';

const SignUp = ({ setSignUp }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { passSignup, signInSignUpError } = useAuth();

    const handelPassSignUp = (e) => {
        passSignup(name, email, password)
        e.preventDefault()
        e.target.reset()
    }

    return (

        <form onSubmit={handelPassSignUp} className='signUpForm d-block'>
            < br />
            <h2 className="text-center">Create account</h2>
            <br />
            <div class="form-group">
                <input onChange={(e) => setName(e.target.value)} type="name" class="form-control signUpFormNAme" id="signUpName" aria-describedby="emailHelp" placeholder="Your Name" required />
            </div>
            <br />
            <div class="form-group">
                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control signUpFormEmail" id="signUpEmail" aria-describedby="emailHelp" placeholder="Your Email" required />
            </div>
            <br />
            <div class="form-group">
                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control signUpFormPassword" id="signUpPassword" placeholder="Your Password" required />
            </div>
            {
                signInSignUpError && <div className="alert alert-danger">
                    {signInSignUpError}
                </div>
            }
            <div onClick={() => setSignUp(false)} style={{ cursor: 'pointer' }} className="text-secondary mt-2"><u>I have account</u></div>
            <br />
            <br />
            <button type="submit" class="btn btn-primary float-right px-4">Create account</button>
        </form>
    );
};

export default SignUp;