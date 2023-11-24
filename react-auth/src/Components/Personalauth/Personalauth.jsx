import React, { useState } from 'react';
import './Personalauth.css';

const Personalauth = () => {
    const [user, setUser] = useState({
        set: false,
        username:'',
        email:'',
        password:''
    });

    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if(user.email && user.password){
            const userinfoset = {...user};
            userinfoset.set=true;
            setUser(userinfoset);
        }
        e.preventDefault();
    }

    const handleChange = (e) => {
        //console.log(e.target.name, e.target.value);
    }

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFieldValid = true;
        const userinfo = {...user};

        if(e.target.name === 'email'){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isEmailValid);
            if(isEmailValid){
                isFieldValid = isEmailValid;
                userinfo.email=e.target.value;
            }
        }

        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length >= 8;
            console.log(isPasswordValid);
            if(isPasswordValid){
                isFieldValid = isPasswordValid;
                userinfo.password = e.target.value;
            }
        }

        if(e.target.name === 'name'){
            userinfo.username = e.target.value;
        }

        if(isFieldValid){
            setUser(userinfo)
        }
        
    }

    return (
        <div className='form-container'>
            <h1>Personal Authentication Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder='Username'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <br />
                <input
                    type="text"
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <br />
                <input type="submit" value="Submit" className='submit-btn'/>
            </form>
            {
                    user.set ? <div>
                        <p>Username: {user.username}</p>
                        <p>User Email: {user.email}</p>
                        <p>User Password: {user.password}</p>
                    </div> : <p>Not Set</p>
            }
        </div>
    );
};

export default Personalauth;