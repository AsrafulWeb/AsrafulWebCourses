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
                tokenAdder()
                tokenAdder()
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
                    tokenAdder()
                    tokenAdder()
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
                tokenAdder()
                tokenAdder()
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
                tokenAdder()
            } else {
                setUser(null)
            }
        });
    }, [])

    const tokenAdder = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(data => {
                sessionStorage.setItem('token', data)
            })
            .catch(err => {

            })
    }

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