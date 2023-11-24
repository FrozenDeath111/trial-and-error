import React from 'react';

const Product = (props) => {
    const {name, id} = props.product;
    const { addToCart } = props;
    return (
        <div style={{border: '1px solid blue', margin: '10px', padding: '2px'}}>
            <h5>{id} :: {name}</h5>
            <button onClick={() => addToCart(id, name)}>add to cart</button>
        </div>
    );
};

export default Product;