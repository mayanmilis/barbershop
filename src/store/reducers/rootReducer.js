const initialState = {
    cart: [],
    data: []

}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_DATA':
            let newData = action.data;
            console.log('got the data!', newData);
            return{
            ...state,
            data: newData
            };
        case 'GET_DATA_ERR':
            console.log('something went wrong', action.err);
        case 'GET_DATA_BY_ID':
            let newDataById = action.data;
            console.log('got the data by id!', newDataById);
            return{
            ...state,
            data: newDataById
            };   
        case 'GET_DATA_BY_ID_ERR':
            console.log('something went wrong', action.err);
        case 'ADD_TO_CART':
            console.log('added to cart');
            let newCart = action.cart;
            return{
                ...state,
                cart: newCart
            }
        case 'ADD_TO_CART_ERR':
            console.log("something went wrong", action.err);
            // default:    
            // return state;
        case 'REMOVE_FROM_CART':
        console.log('Removed from cart');
        let removedCart = action.cart
        return{
            ...state,
            cart: removedCart
        }
        case 'REMOVE_FROM_CART_ERR':
            console.log("something went wrong", action.err);
            default:    
            return state;
    }
    
}

export default cartReducer