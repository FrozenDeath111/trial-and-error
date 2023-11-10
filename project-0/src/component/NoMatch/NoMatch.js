import React from 'react';
import './NoMatch.css';
import {Link} from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className='nomatch'>
            <h1><Link to="/">Route Not Found</Link></h1>
        </div>
    );
};

export default NoMatch;