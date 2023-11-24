import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: 'Asus A10', id: 1},
        {name: 'Asus A11', id: 2},
        {name: 'Asus A12', id: 3},
        {name: 'Asus A13', id: 4},
        {name: 'Asus A14', id: 5},
    ]
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }

            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {
                ...state,
                cart: remainingCart
            }
        default:
            return state;
    }
}

export default cartReducer;