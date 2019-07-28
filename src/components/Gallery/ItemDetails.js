import React, { Component } from 'react';
import './Gallery.scss';
import {connect} from 'react-redux';
import {getDataByCategory,getDataById} from '../../store/actions/getDataAction';


class ItemDetails extends Component {

    state = {
        amount: 1,
        totalPrice: ''
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        let category = this.props.match.params.category;
        this.props.getDataById(id,category);
        this.props.getDataByCategory(category, id);
    }

    onChangeAmount = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    increaseNumber = () =>{
        let amount = this.state.amount;
        let price = this.totalPrice(this.props.itemDetails.price)
        let newPrice = (amount+1)*price;
        newPrice = newPrice.toFixed(2);
        this.setState({
            amount: amount+1,
            totalPrice: newPrice
        });
    }

    decreaseNumber = () =>{
        let amount = this.state.amount;
        let price = this.totalPrice(this.props.itemDetails.price)
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
        price = price.match(regex).join('');
        let newTotalPrice = Number(price);
        return newTotalPrice;
    }

    render() {
        let {itemDetails} = this.props;
        let totalPrice = this.state.totalPrice;
        console.log(this.props)
        let price = totalPrice?totalPrice + " " + "nis":itemDetails&&itemDetails.price;
        let category = itemDetails&&itemDetails.category;
        category = category&&category.slice(0,1).toUpperCase()+category.slice(1);
        

        return(
            <div className="item-details-container">
                <div className="h1-container">
                    <h1>{category}</h1>
                </div>
                <div className="page-container">
                    <div className="details-container">
                        <div className="details">
                            <div className="header">
                                <h1>{itemDetails&&itemDetails.modelName}</h1>
                            </div>
                            <div className="price-container">
                                <div className="price">
                                    <h2>{price}</h2>
                                </div>
                                <div className="amount">
                                    <button onClick={this.decreaseNumber}>-</button>
                                    <input type="number" id="amount" value={this.state.amount}/>
                                    <button onClick={this.increaseNumber}>+</button>
                                </div>
                            </div>
                            <div className="checkout">
                                    <button>BUY NOW</button>
                                    <button>ADD TO CART</button>
                                </div>
                            <div className="description">
                                <p>Lorem members across the country. Proin vitae hendrerit dui, and the time for the region. Before the very first basketball set their jaws grief and clinical care; It is a whole lot of television or been targeted. In soccer care networks. Chat laughter and sorrow, sem graduated deductible carrots. Now set mourning element. Financing need complete freedom. Suspendi salad temperature.</p>
                            </div>
                        </div>
                        <div className="img-container">
                            <div className="img" style={{backgroundImage:`url(${itemDetails&&itemDetails.url})`}}></div>
                        </div>
                    </div>
                    <div className="recommended-items-container">
                        <div className="h2-container">
                            <h2>Recommended Items Fro You</h2>
                        </div>
                        <div className="recommended-items">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    const id = ownProps.match.params.id;
    let data = state.data;
    let itemDetails = data&&data.filter(item => item.id===id);
    itemDetails = itemDetails[0]&&itemDetails[0].data;
debugger
    return{
        itemDetails: itemDetails,
        recommendedItems: data
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
      getDataById: (id,category) => dispatch(getDataById(id,category)),
      getDataByCategory: (id,category) => dispatch(getDataByCategory(id,category))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(ItemDetails)