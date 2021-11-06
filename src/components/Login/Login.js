import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { useAuth } from './useAuth';

const Login = () => {

    const [signUp, setSignUp] = useState(false)

    const history = useHistory()

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            history.replace('/dashboard')
        }
    }, [history, user])

    return (
        <div className='loginMain'>
            <div className="container">
                <br />
                <div className='d-flex justify-content-center'>
                    {
                        user ?
                            <div className="alert alert-success text-center text-dark">
                                <h1>You are Signed In</h1>
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