import React, { useContext, useState } from 'react';
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

    const [allUser, setAllUser] = useState([]);
    const handleAllUser = () => {
        fetch('http://localhost:3001/users?email='+user.email ,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }

        })
        .then(res => res.json())
        .then(data => {
            if(data === "Unsuccessful"){
                alert("Unsuccessful");
            }
            else{
                setAllUser(data);
            }
        })
    }

    return (
        <div className='home'>
            <h1>You Are Welcome { user && user.email }</h1>
            <h1>Name: { userinfo[0].name }</h1>
            <h1>email: { userinfo[0].email }</h1>
            <img src={userinfo[0].photo} alt="" />
            <button className='logout-btn' onClick={handleLogout}>LogOut</button>
            <button className='logout-btn' onClick={handleAllUser}>All User</button>
            <div>
                <ul>
                    {
                        allUser && allUser.map(user => <li key={user._id}>username {user.username} <br />
                        password {user.password} <br /> id {user._id}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Home;