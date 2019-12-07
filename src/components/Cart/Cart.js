import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart,getCartData } from '../../store/actions/cartAction';
import './Cart.scss';
import CartItem from './CartItem';

class Cart extends Component {

    state = {
      cart: '',
      total: ''
  }

  componentDidMount(){
    this.props.getCartData();
    console.log("componetDidMount", this.props.cart)
  }
  

  totalItemPrice = (price) =>{
    let regex = /[0-9]\d./g;
    price = price.match(regex).join('');
    let newTotalPrice = Number(price);
    return newTotalPrice;
  }

  totalPrice = (cart) => {
      let totalPrice = 0;
      totalPrice = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.amount* this.totalItemPrice(currentValue.item.price)),0);
      console.log(totalPrice)
      return totalPrice.toFixed(2)
  }

  render() {
    const {cart} = this.props;
    // const totalPrice = cart.length ? this.totalPrice(cart) : 0 ;
    console.log(cart.length)
    console.log("rendered!!!!!!!!!!!!!!!!!!!!!!!!!!")
    if(!cart.length){
      return(
        <div>
          cart is empty
        </div>
      )
    }else{
      let totalPrice = this.totalPrice(cart)
      console.log(totalPrice)
      return (
        <div className="cart">
          <div className="cart-container">
            <div className="header">
              <div className="h1-container">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="items-container">
              <div className="cart-list-container">
                <ul>
                  {cart&&cart.map(item =>{
                    return(
                      <li key = {item.id}>
                        <CartItem
                          name={item.item&&item.item.modelName}
                          amount={item.amount}
                          imgUrl={item.item&&item.item.url}
                          price={item.item&&item.item.price}
                          item={item.item&&item.item}
                          id={item.id}
                          getCartData={this.props.getCartData}
                        />
                        <hr/> 
                        </li>
                    )
                  })}
                </ul>
              </div>
              <div className="checkout">
                <div className="checkout-container">
                  <div className="h2-header">
                    <h2>CHECKOUT</h2>
                  </div>
                  <div className="total">
                    <p>Total: {totalPrice}  nis</p>
                  </div>
                    <div className="buy">
                    <button onClick={this.props.getCartData}>BUY</button>
                  </div>
                  </div>
                </div>
            </div>
          </div>
    
        </div>
      );
    }

  }
}

const mapStateToProps = (state) =>{
  let cart = state.cart
  console.log("mapStateToProps")
    return{
        cart: cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (item) => dispatch(addToCart(item)),
      getCartData: () => dispatch(getCartData())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)