import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    console.log(props);
    const { products, addToCart } = props;
    return (
        <div>
            {
                products.map(pd => <Product 
                    product = {pd} 
                    key = {pd.id}
                    addToCart = {addToCart}
                    ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(Shop);