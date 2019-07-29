import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartAction';

class Cart extends Component {

    test = () =>{
        this.props.addToCart('yona!!!!')
    }

  render() {
  return (
    <div>
        <div>
            Cart Component!!!!!!!!!!!!!!!!!!!!!!!
        </div>
        <button onClick={this.test}>Test</button>
    </div>
  );
  }
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (item) => dispatch(addToCart(item))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)