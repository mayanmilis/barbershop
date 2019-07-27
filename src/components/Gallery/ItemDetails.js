import React, { Component } from 'react';
import './Gallery.scss';
import {connect} from 'react-redux';
import {getDataById} from '../../store/actions/getDataAction';

class ItemDetails extends Component {

    state = {
        amount: 1,
        totalPrice: ''
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        let category = this.props.match.params.category;
        this.props.getDataById(id,category);
    }

    onChangeAmount = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
        
    }

    increaseNumber = () =>{
        let amount = this.state.amount;
        let totalPrice = this.totalPrice()*amount;
        this.setState({
            amount: amount+1,
            totalPrice: totalPrice
        });
    }

    decreaseNumber = () =>{
        let amount = this.state.amount;
        let totalPrice = this.totalPrice()*amount;
        if(amount>1){
            this.setState({
                amount: amount-1,
                totalPrice: totalPrice
            });
        }else{
            return null
        }
    }

    totalPrice = () =>{
        let price = this.props.itemDetails.price;
        let amount = this.state.amount;
        let regex = /[0-9]\d/;
        let totalPrice = price.match(regex).join('');
        totalPrice = totalPrice*amount;
        this.setState({
            totalPrice: totalPrice
        })
        console.log(totalPrice)
    }

    render() {
        const {itemDetails} = this.props;
        let totalPrice = !this.state.totalPrice?itemDetails.price:this.state.totalPrice;
        // let totalPrice = this.totalPrice(itemDetails.price,this.state.amount)
        // console.log(this.props)
        return(
            <div className="item-details-container">
                <div className="details">
                    <div className="header">
                        <h1>{itemDetails&&itemDetails.modelName}</h1>
                    </div>
                    <div className="price-container">
                        <div className="price">
                            <h2>{totalPrice}</h2>
                        </div>
                        <div className="amount">
                            <button onClick={this.decreaseNumber}>-</button>
                            <input type="number" id="amount" value={this.state.amount}/>
                            <button onClick={this.increaseNumber}>+</button>
                        </div>
                    </div>
                    <div className="checkout">
                            <button onClick={this.totalPrice}>BUY NOW</button>
                            <button>ADD TO CART</button>
                        </div>
                    <div className="description">
                        <p>Lorem members across the country. Proin vitae hendrerit dui, and the time for the region. Before the very first basketball set their jaws grief and clinical care; It is a whole lot of television or been targeted. In soccer care networks. Chat laughter and sorrow, sem graduated deductible carrots. Now set mourning element. Financing need complete freedom. Suspendi salad temperature.</p>
                    </div>
                </div>
                <div className="img">
                    <img src={itemDetails&&itemDetails.url}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    console.log(state, ownProps);
    let itemDetails = state.data;
    // console.log(itemDetails)
    return{
        itemDetails: itemDetails
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
      getDataById: (id,category) => dispatch(getDataById(id,category))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(ItemDetails)