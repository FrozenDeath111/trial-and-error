import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h3 className='navbtn'><Link to="/login" className='href'>Login</Link></h3>
            <h3 className='navbtn'><Link to="/signup" className='href'>Signup</Link></h3>
            <h3 className='navbtn'><Link to="/personalauth" className='href'>Personal-Auth</Link></h3>
            <h3 className='navbtn'><Link to="/book" className='href'>Book</Link></h3>
            <h3 className='navbtn'><Link to="/" className='href'>Home</Link></h3>
        </div>
    );
};

export default Header;