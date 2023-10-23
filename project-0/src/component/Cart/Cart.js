import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalArea = cart.reduce((total, product) => total + product.area, 0);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Country Ordered: {cart.length}</p>
            <p>Total Area: {totalArea}</p>
        </div>
    );
};

export default Cart;