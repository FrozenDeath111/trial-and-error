import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, " ", password);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));

            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='signup'>
            <h1>Signup Page</h1>
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
                <button type='submit' className='signup-btn'>Signup</button>
            </form>
            <p>Already have an account? Click <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;