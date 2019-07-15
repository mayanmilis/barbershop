const initialState = {
    cart: ['atalef!!!!!!!']
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            console.log('added to cart');
            return state;
        case 'ADD_TO_CART_ERR':
            console.log("error");
            default:
                return state;
    }
}

export default cartReducer