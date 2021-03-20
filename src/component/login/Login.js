import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';





const Login = () => {

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [newUser, setNewUser] = useState(true);
    const [validFormMessage, setValidFormMessage] = useState(true)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    const handleBlurEvent = e => {
        const name = e.target.name;
        const value = e.target.value;
        let isFieldValid = true;
        if (name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(value);
        }
        if (name === 'password') {
            const testValidPass = /\d{2}/.test(value) && value.length > 8;
            isFieldValid = testValidPass;
        }
        if (isFieldValid) {
            const newUser = { ...user };
            newUser[name] = value;
            setUser(newUser)
        }
        setValidFormMessage(isFieldValid);
        // console.log(user)
    };

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res)
        if (redirect) {
            history.replace(from);
        }
    }

    // const handleCreateUser = e => {
    //     if (newUser && user.email && user.password) {
    //         firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //             .then((userCredential) => {
    //                 const user = userCredential.user;
    //                 console.log(user);
    //                 handleResponse(user, true);
    //             })
    //             .catch((error) => {
    //                 var errorMessage = error.message;
    //                 console.log(errorMessage)
    //             });
    //         e.preventDefault();
    //     }
    // };

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    };

    // const fbSignIn = () => {
    //     handleFbSignIn()
    //     .then(res => {
    //       handleResponse(res, true);
    //     })
  
    // };
  

    const handleCreateUser = e => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    };

    const handleLogin = e => {
        if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              handleResponse(res, true);
            })
          }
          e.preventDefault();
    };

    // const handleLogin = e => {
    //     if (!newUser && user.email && user.password) {
    //         firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    //             .then((userCredential) => {
    //                 var user = userCredential.user;
    //                 handleResponse(user, true)
    //             })
    //             .catch((error) => {
    //                 var errorMessage = error.message;
    //                 console.log(errorMessage)
    //             });
    //         e.preventDefault();
    //     }
    // }




    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light p-4 border">
                    <h4 className='text-info text-center py-3'>{newUser ? 'Create an account' : 'Login'}</h4>
                    <form>
                        {
                            newUser && <input onBlur={handleBlurEvent} className='form-control p-3 mb-3' type="text" name='name' placeholder='Name' required />
                        }
                        <input onBlur={handleBlurEvent} className='form-control p-3 mb-3' type="email" name='email' placeholder='Email' required />
                        <input onBlur={handleBlurEvent} className='form-control p-3 mb-3' type="password" name='password' placeholder='Password' required />
                        {/* <input className='form-control p-3' type="password" name='confirm-pass' placeholder='Confirm Password' /> */}
                        {
                            validFormMessage || <p className='text-danger text-center'>Password must be contain by tow digit</p>
                        }
                        <div className='text-center pt-3'>
                            {
                                newUser ? <button onClick={handleCreateUser} className="btn btn-info w-100 mb-2">Create an account</button> :
                                    <button onClick={handleLogin} className="btn btn-info w-100 mb-2">Login</button>
                            }
                            <p>{newUser ? 'Already have an account ?' : 'Need account ?'} <button onClick={() => setNewUser(!newUser)} className='btn text-info'>{newUser ? 'Login' : 'Sign up'}</button></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 p-4 border border-top-0">
                    <p className='text-center'> Or </p>
                    <hr className='w-50' />
                    <button onClick={googleSignIn} className="btn btn-info border rounded-pill w-100 py-3 mb-2"><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
                    <button className="btn btn-info border rounded-pill w-100 py-3"><FontAwesomeIcon icon={faFacebook} /> Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};
export default Login;