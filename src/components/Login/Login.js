import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { useAuth } from './useAuth';
import './login.css'

const Login = () => {

    const [signUp, setSignUp] = useState(false)

    const history = useHistory()

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            history.goBack()
        }
    }, [history, user])

    return (
        <div className='loginMain'>
            <div className="container">
                <div className='d-flex justify-content-center'>
                    {
                        user ?
                            <div style={{ paddingTop: "33vh" }}>
                                <div className="alert alert-success text-center text-dark">
                                    <h1>You are Signed In</h1>
                                </div>
                            </div>
                            :
                            <div className="loginForm col-sm-4">
                                {
                                    signUp ?
                                        <SignUp setSignUp={setSignUp} />
                                        :
                                        <SignIn setSignUp={setSignUp} />
                                }
                            </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Login;