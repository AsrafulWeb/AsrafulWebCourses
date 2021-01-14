import React, { createContext, useContext, useEffect, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';
import { Redirect, Route } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const AuthContext = createContext()
export const AuthProvider = (props) => {
    const auth = Auth()
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)


const getUser = user => {
    const { displayName, email, photoURL, x } = user;
    return { name: displayName, email, photo: photoURL, x }
}

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
export const PrivateRouteForLogin = ({ children, ...rest }) => {
    const auth = useAuth();
    const pathN = window.history.back();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    <Redirect
                        to={{
                            pathname: pathN,
                            state: { from: location }
                        }}
                    />
                ) : (
                        children
                    )
            }
        />
    );
}

const Auth = () => {

    const [user, setUser] = useState(null)

    const [signInSignUpError, setSignInSignUpError] = useState('')


    const gSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setUser(res.user)
                window.history.back();
            })
            .catch(err => {
                setSignInSignUpError(err.message)
                setUser(null)
            })
    }

    const passSignup = (name, email, password, x) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name,
                }).then(() => {
                    setUser(res.user);
                    setSignInSignUpError('')
                    window.history.back();
                });
            })
            .catch(err => {
                setSignInSignUpError(err.message)
                setUser(null)
            })
    }

    const passLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user);
                setSignInSignUpError('')
                window.history.back();
            })
            .catch(err => {
                setSignInSignUpError(err.message)
                setUser(null)
            })
    }

    const signOut = () => {
        firebase.auth().signOut()
            .then(res => {
                setUser(null)
            })
            .catch(err => {
                setSignInSignUpError(err.message)
            })
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const user = getUser(usr)
                setUser(user)
            } else {
                setUser(null)
            }
        });
    }, [])

    // const userId = '131313rr'

    // useEffect(() => {
    //     firebase.database().ref('users/' , userId).set({
    //         username: 'asraful',
    //         email: 'mxasraful@outlook.com',
    //         profile_picture : 'https://fb.com/asrafulfb'
    //       });
    // })



    return {
        gSignIn,
        passSignup,
        passLogin,
        signOut,
        user,
        signInSignUpError
    };
};

export default Auth;