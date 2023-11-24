import React, { useContext } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { userContext } from '../../App';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const userinfo = useContext(userContext);

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login");
    }

    return (
        <div className='home'>
            <h1>You Are Welcome { user && user.email }</h1>
            <h1>Name: { userinfo[0].name }</h1>
            <h1>email: { userinfo[0].email }</h1>
            <img src={userinfo[0].photo} alt="" />
            <button className='logout-btn' onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default Home;