import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userContext } from '../../App';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, " ", password);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));

            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    const setUserinfo = useContext(userContext);

    const provider = new GoogleAuthProvider();

    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log(result);

            const resultinfo = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            };

            setUserinfo[1](resultinfo);

            navigate("/");

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(errorCode, errorMessage, email, credential);
        });
    }

    return (
        <div className='signup'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className='signup-form'>
                <input 
                    type="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='signup-btn'>Login</button>
            </form>
            <p>No Account? Click <Link to='/signup'>Signup</Link></p>
            <button className='signup-btn' onClick={handleGoogleAuth}>Signup with google</button>
        </div>
    );
};

export default Login;