import React from 'react';
import SW from '../../images/SW.PNG';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <a href="/"><img src={SW} alt="" /></a>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage</a>
            </nav>
        </div>
    );
};

export default Header;