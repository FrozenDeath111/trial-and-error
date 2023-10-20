import React from 'react';

const Country = (props) => {
    const handleCountry = props.hC;
    return (
        <div>
            <h4>{props.set.name.common}</h4>
            <h4>{props.set.name.official}</h4>
            <button onClick={() => handleCountry(props.set.name.common)}>Add Yo</button>
        </div>
    );
};

export default Country;