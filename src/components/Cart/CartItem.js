import React, { Component } from 'react';

class CartItem extends Component {

    test = () =>{
        this.props.addToCart('yona!!!!')
    }

  render() {
      const {name,price,imgUrl,amount} = this.props;
  return (
    <div>
        {amount}
        {name}
    </div>
  );
  }
}

export default CartItem