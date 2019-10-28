import React, { Component } from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import { addToCart,removeFromCart } from '../../store/actions/cartAction';
// import {increaseNumber,decreaseNumber} from '../../shared/functions';

class CartItem extends Component {

  state = {
    totalPrice: '',
    amount: '',
    price: '',
    name: '',
    imgUrl: '',
    totalPrice: '',
    id: '',
    item: ''

  }

  async componentDidMount(){
    let props = await this.props&&this.props;
    let amount = props.amount;
    let price = props.price;
    let name = props.name;
    let imgUrl = props.imgUrl;
    let id = props.id;
    let item = props.item;
    let totalPrice = this.totalPrice(price);
    totalPrice = totalPrice*amount;
    this.setState({
      amount: amount,
      price: price,
      name: name,
      imgUrl: imgUrl,
      totalPrice: totalPrice,
      id: id,
      item: item
    })
  }

  onChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

    increaseNumber = async() =>{
      let id = this.state.id;
      let item = this.state.item;
      let amount = this.state.amount;
      let price = this.totalPrice(this.props.price)
      let newPrice = (amount+1)*price;
      newPrice = newPrice.toFixed(2);
      await this.setState({
          amount: amount+1,
          totalPrice: newPrice
      });    
      this.addToCart();  
  }

  decreaseNumber = () =>{
      let id = this.state.id;
      let item = this.state.item;
      let amount = this.state.amount;
      let price = this.totalPrice(this.props.price)
      let newPrice = (amount-1)*price;
      newPrice = newPrice.toFixed(2);
      if(amount>1){
          this.setState({
              amount: amount-1,
              totalPrice: newPrice
          });
      this.addToCart(id,item,amount);
      }else{
          return null
      }
  }

  totalPrice = (price) =>{
      let regex = /[0-9]\d./g;
      price = price.match(regex).join('');
      let newTotalPrice = Number(price);
      return newTotalPrice;
  }

      addToCart = () =>{
        const id = this.state.id;
        console.log(id)
        let item = this.state.item;
        let amount = this.state.amount;
        this.props.addToCart(id,item,amount);
    }

    removeFromCart = () =>{
      const id = this.state.id;
      this.props.removeFromCart(id);
    } 

  render() {
      let {name,imgUrl,amount,totalPrice} = this.state;
      console.log(this.state)
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
        <div className="price">{totalPrice}</div>
        <div className="remove"><button onClick={this.removeFromCart}>Remove</button></div>
    </div>
  );
  }

}
const mapStateToProps = (state) =>{
  let cart = state.cart
  console.log(cart)
    return{
        cart: cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id,item,amount) => dispatch(addToCart(id,item,amount)),
      removeFromCart: (id) => dispatch(removeFromCart(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)