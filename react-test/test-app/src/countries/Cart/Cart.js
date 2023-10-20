import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const tcart = cart.reduce((sum, carti) => sum+carti, 0);
    return (
        <div>
            <h2>This card: {cart.map(c => c)} {tcart}</h2>
        </div>
    );
};

export default Cart;