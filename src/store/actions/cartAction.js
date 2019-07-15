export const addToCart = (item) => {
    return(dispatch) =>{
        let promise = new Promise((res,rej) =>{
            setTimeout(() =>{
                res(console.log('addToCart clicked!'))
            }, 3000)
        })
        .then(() =>{
            dispatch({ type: 'ADD_TO_CART', item: item});
        }).catch((err) => {
            dispatch({type: "ADD_TO_CART_ERR", err})
        })
    }
}