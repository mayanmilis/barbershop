import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart,getCartData } from '../../store/actions/cartAction';
import './Cart.scss';
import CartItem from './CartItem';

class Cart extends Component {


  componentDidMount(){
    this.props.getCartData();
  }

  render() {
    const {cart} = this.props;
    console.log(cart)
    if(!cart){
      return(
        <div>
          cart is empty
        </div>
      )
    }else{
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
                    <p>Total: </p>
                  </div>
                    <div className="buy">
                    <button>BUY</button>
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
  console.log(cart)
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