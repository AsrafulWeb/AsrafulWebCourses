import React, { useState } from 'react';
import { useAuth } from './useAuth';

const Login = () => {

    const auth = useAuth()

    const [signUp, setSignUp] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [x, setX] = useState({ name: 'as', email: 'eiufy' })

    const { user, gSignIn, passSignup, passLogin, signInSignUpError } = useAuth();

    const handelPassSignUp = (e) => {
        passSignup(name, email, password, x)
        e.preventDefault()
        e.target.reset()
    }
    const handelPassSignIn = (e) => {
        passSignup(email, password)
        e.preventDefault()
        e.target.reset()
    }

    console.log(auth)


    return (
        <div className='loginMain'>
            <div className="container">
                <br />
                <div style={{ width: '40%', margin: '0 auto' }} className="loginForm">
                    {
                        user ?
                            <div className="alert alert-success text-center text-dark">
                                <h1>You are Signed In</h1>
                            </div>
                            : <div className="">
                                {
                                    signUp ?
                                        <form onSubmit={handelPassSignUp} className='signUpForm d-block'>
                                            < br />
                                            <h2 className="text-center">Create account</h2>
                                            <br />
                                            <div class="form-group">
                                                <input onChange={(e) => setName(e.target.value)} type="name" class="form-control signUpFormNAme" id="signUpName" aria-describedby="emailHelp" placeholder="Your Name" required />
                                            </div>
                                            <div class="form-group">
                                                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control signUpFormEmail" id="signUpEmail" aria-describedby="emailHelp" placeholder="Your Email" required />
                                            </div>
                                            <div class="form-group">
                                                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control signUpFormPassword" id="signUpPassword" placeholder="Your Password" required />
                                            </div>
                                            {
                                                signInSignUpError && <div className="alert alert-danger">
                                                    {signInSignUpError}
                                                </div>
                                            }
                                            <a onClick={() => setSignUp(false)} style={{ cursor: 'pointer' }} className="">I have account</a>
                                            <button type="submit" class="btn btn-primary float-right">Create account</button>
                                        </form> :
                                        <form onSubmit={handelPassSignIn} className='loginForm d-block'>
                                            <br />
                                            <h2 className="text-center">Login your account</h2>
                                            <br />
                                            <button onClick={gSignIn} type='button' style={{ width: '100%', marginBottom: '20px' }} className="btn btn-outline-dark">
                                                <img style={{ marginRight: '10px' }} src="https://img.icons8.com/color/30/000000/google-logo.png" />
                                                    Sign In With Google
                                                    </button>
                                            <br />
                                            <div class="form-group">
                                                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control loginFormEmail" id="loginEmail" aria-describedby="emailHelp" placeholder="Your Email" required />
                                            </div>
                                            <div class="form-group">
                                                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control loginFormPassword" id="loginPassword" placeholder="Your Password" required />
                                            </div>
                                            {
                                                signInSignUpError && <div className="alert alert-danger">
                                                    {signInSignUpError}
                                                </div>
                                            }
                                            <a onClick={() => setSignUp(true)} style={{ cursor: 'pointer' }} className="">I don't have account</a>
                                            <button type="submit" class="btn btn-primary float-right">Login</button>
                                        </form>
                                }
                            </div>}
                    <br /><br /><br />
                </div>
            </div>
        </div >
    );
};

export default Login;