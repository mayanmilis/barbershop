const initialState = {
    cart: ['atalef!!!!!!!'],
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
            let cart = state.cart;
            cart = action.cart;
            return{
                ...state,
                cart: cart
            }
        case 'ADD_TO_CART_ERR':
            console.log("something went wrong", action.err);
            default:
                return state;
    }
}

export default cartReducer