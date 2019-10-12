// export let increaseNumber = (amount,price) =>{
//     amount = this.state.amount;
//     price = this.totalPrice(this.props.itemDetails.price)
//     let newPrice = (amount+1)*price;
//     newPrice = newPrice.toFixed(2);
//     this.setState({
//         amount: amount+1,
//         totalPrice: newPrice
//     });
// }


// export let decreaseNumber = (amount,price) =>{
//     amount = this.state.amount;
//     price = this.totalPrice(this.props.itemDetails.price)
//     let newPrice = (amount-1)*price;
//     newPrice = newPrice.toFixed(2);
//     if(amount>1){
//         this.setState({
//             amount: amount-1,
//             totalPrice: newPrice
//         });
//     }else{
//         return null
//     }
// }

// // export let totalPrice = (price) =>{
// //     let regex = /[0-9]\d./g;
// //     debugger
// //     return price.match(regex);
    
// //     console.log(price)
// //     // price = price.match(regex).join('');
// //     // let newTotalPrice = Number(price);
// //     // return newTotalPrice;
// // }