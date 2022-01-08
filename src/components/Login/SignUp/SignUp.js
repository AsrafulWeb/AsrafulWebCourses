import React, { useState } from 'react';
import { useAuth } from '../useAuth';

const SignUp = ({ setSignUp }) => {

    const [pwdType, setPwdType] = useState(true)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { passSignup, signInSignUpError } = useAuth();

    const handelPassSignUp = (e) => {
        passSignup(name, email, password)
        e.preventDefault()
        e.target.reset()
    }

    // Control password input box type
    const pwdTypeControl = () => {
        if (pwdType) {
            setPwdType(false)
        } else {
            setPwdType(true)
        }
    }

    return (

        <form onSubmit={handelPassSignUp} className='signUpForm d-block'>
            <h2 className="text-center mt-5 mb-4">Create account</h2>
            <div className="card py-4">
                <div className="card-body">
                    <div class="form-group mb-3">
                        <label class="form-label" htmlFor="signUpName">Your Name <span className="text-danger"> *</span></label>
                        <input onChange={(e) => setName(e.target.value)} type="name" class="form-control signUpFormNAme" id="signUpName" aria-describedby="emailHelp" placeholder="name" required />
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label" htmlFor="signUpEmail">Your Email <span className="text-danger"> *</span></label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control signUpFormEmail" id="signUpEmail" aria-describedby="emailHelp" placeholder="email@example.com" required />
                    </div>
                    <div class="form-group mb-4">
                        <label class="form-label" htmlFor="signUpPassword">Your Password <span className="text-danger"> *</span></label>
                        <div class="input-group mb-3">
                            <input onChange={(e) => setPassword(e.target.value)} type={pwdType ? "password" : "text"} class="form-control signUpFormPassword" id="signUpPassword" placeholder="password" required />
                            <button class="btn btn-outline-secondary rounded-end pwd-ctrl-btn" onClick={pwdTypeControl} type="button" id="">
                                {
                                    pwdType ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill mb-1" viewBox="0 0 16 16">
                                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill mb-1" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg>                            }
                                    </button>
                        </div>
                    </div>
                    {
                        signInSignUpError && <div className="alert alert-danger">
                            {signInSignUpError}
                        </div>
                    }
                    <div className="d-flex">
                        <div onClick={() => setSignUp(false)} style={{ cursor: 'pointer' }} className="text-secondary mt-2 me-auto"><u>I have account</u></div>
                        <button type="submit" class="btn btn-primary btn-sm float-right px-4">Sign Up</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;