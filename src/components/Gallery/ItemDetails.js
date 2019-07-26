import React, { Component } from 'react';
import './Gallery.scss';
import {connect} from 'react-redux';
import {getDataById} from '../../store/actions/getDataAction';

class ItemDetails extends Component {

    componentWillMount(){
        const id = this.props.match.params.id;
        console.log(id)
        this.props.getDataById(id);
    }

    render() {
        const {itemDetails} = this.props;
        console.log(this.props)
        return(
            <div className="item-details-container">
                <div className="details">
                    <div className="header">
                        <h1>{itemDetails&&itemDetails.data.modelName}</h1>
                    </div>
                    <div className="price-container">
                        <div className="price">
                            <h2>{itemDetails&&itemDetails.data.price}</h2>
                        </div>
                        <div className="amount">
                            <button>+</button>
                            <input type="number"/>
                            <button>-</button>
                        </div>
                        <div className="checkout">
                            <button>BUY NOW</button>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                    <div className="description">
                        <p>Lorem members across the country. Proin vitae hendrerit dui, and the time for the region. Before the very first basketball set their jaws grief and clinical care; It is a whole lot of television or been targeted. In soccer care networks. Chat laughter and sorrow, sem graduated deductible carrots. Now set mourning element. Financing need complete freedom. Suspendi salad temperature.</p>
                    </div>
                </div>
                <div className="img">
                    <img src={itemDetails&&itemDetails.data.url}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    console.log(state, ownProps);
    let itemDetails;
    state.data.map(item =>{
        if(item.id===id){
            itemDetails = item ;
        }
    });
    console.log(itemDetails)
    return{
        itemDetails: itemDetails
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
      getDataById: (id) => dispatch(getDataById(id))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(ItemDetails)