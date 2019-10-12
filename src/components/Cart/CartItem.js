import React, { Component } from 'react';
import './Cart.scss';
// import {increaseNumber,decreaseNumber} from '../../shared/functions';

class CartItem extends Component {

  state = {
    totalPrice: ''
  }

  componentDidMount(){
    let props = this.props&&this.props;
    let amount = props.amount;
    this.setState({
      amount: amount,
      price: this.props.price,
      name: this.props.name,
    })
  }

  onChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

    increaseNumber = () =>{
      let amount = this.state.amount;
      let price = this.totalPrice(this.props.price)
      let newPrice = (amount+1)*price;
      newPrice = newPrice.toFixed(2);
      this.setState({
          amount: amount+1,
          totalPrice: newPrice
      });
  }

  decreaseNumber = () =>{
      let amount = this.state.amount;
      let price = this.totalPrice(this.props.price)
      let newPrice = (amount-1)*price;
      newPrice = newPrice.toFixed(2);
      if(amount>1){
          this.setState({
              amount: amount-1,
              totalPrice: newPrice
          });
      }else{
          return null
      }
  }

  totalPrice = (price) =>{
      let regex = /[0-9]\d./g;
      price = this.props.price;
      price = price.match(regex).join('');
      let newTotalPrice = Number(price);
      return newTotalPrice;
  }

  render() {
      let {name,price,imgUrl,amount} = this.props;
      console.log(this.state, 'yonaaaaaaaaaa')
  return (
    <div className="cart-item">
        <div className="img" style={{backgroundImage:`url(${imgUrl})`}}></div>
        <div>{this.state.amount}</div>
        <div className="name" id="name" onChange={this.onChange}>{name}</div>
        <div className="amount">
          <div>
            <button onClick={this.decreaseNumber}>-</button>
          </div>
          <div id="amount" onChange={this.onChangeHandler}>
            {amount}
          </div>
        <div>
            <button onClick={this.increaseNumber}>+</button>
          </div>
        </div>
        <div className="price">{price}</div>
        <div className="remove"><button>Remove</button></div>
    </div>
  );
  }
}

export default CartItem