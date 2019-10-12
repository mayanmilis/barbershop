
export const addToCart = (id,item,amount) => {
    let getItem = localStorage.getItem("cart");
    let cartData = [];
    if(getItem){
        getItem = JSON.parse(getItem);
        let product = {item: item, amount: amount}
        getItem[id] = product;
        getItem = JSON.stringify(getItem);
        localStorage.setItem("cart",getItem);
        let parseProduct = JSON.parse(localStorage.getItem("cart"));
        console.log(parseProduct[id])
        for(let key in parseProduct){
            console.log(typeof parseProduct[key].item)
            cartData.push({id: key, amount: parseProduct[key].amount, item: parseProduct[key].item})
        }
        console.log(cartData)
    }
    else{
        let list = {};
        let product = {item: item, amount: amount}
        list[id] = product;
        list = JSON.stringify(list);
        localStorage.setItem("cart",list);
        console.log(product)
        cartData.push({id: id, amount: amount, item: item})
    }
    return(dispatch) =>{
        try{
            dispatch({ type: 'ADD_TO_CART', cart: cartData});
        }   
        catch(err){
            dispatch({type: "ADD_TO_CART_ERR", err})
        }
    }
}

export const getCartData = () => {
    let data = localStorage.getItem("cart");
    data = JSON.parse(data);
    let cart = [];
    for(let key in data){
        cart.push({id: key, amount: data[key].amount, item: data[key].item})
    }
    return(dispatch) =>{
        try{
            dispatch({ type: 'ADD_TO_CART', cart: cart});
        }   
        catch(err){
            dispatch({type: "ADD_TO_CART_ERR", err})
        }
    }
}
