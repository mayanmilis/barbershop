const initialState = {
    cart: ['atalef!!!!!!!'],
    data: []

}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_DATA':
            let newData = action.data;
            console.log('got the data!', newData)
            return{
            ...state,
            data: newData
            };
        case 'GET_DATA_ERR':
                console.log('something went wrong', action.err)
        case 'ADD_TO_CART':
            console.log('added to cart');
            return state;
        case 'ADD_TO_CART_ERR':
            console.log("something went wrong", action.err);
            default:
                return state;
    }
}

export default cartReducer