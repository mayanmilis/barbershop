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
                      <li>
                        <CartItem
                        name={item.id}
                        amount={item.amount}
                        // imgUrl={item.item.url}
                        // price={item.item.price}
                        />
                        </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="checkout-container">
    
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