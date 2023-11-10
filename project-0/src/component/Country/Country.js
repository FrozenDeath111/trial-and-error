import React, { useEffect, useState } from 'react';
import "./Country.css";
import { useNavigate, useParams } from 'react-router-dom';

const Country = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/shop');
    }

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    }, [name]);

    return (
        <div>
            <h1>This is the information for country: {name}</h1>
            {
                country.map(con => (
                    <div key={con.ccn3}>
                        <p>{con.name.common}</p>
                        <p>{con.name.official}</p>
                        <p>{con.ccn3}</p>
                    </div>
                ))
            }
            <button onClick={() => {handleNavigate()}}>Go To Shop</button>
        </div>
    );
};

export default Country;