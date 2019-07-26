import React, { Component } from 'react';
import './Gallery.scss';
import {connect} from 'react-redux';

class ItemDetails extends Component {

    render() {
        const {itemDetails} = this.props;
        console.log(this.props)
        return(
            <div className="item-details-container">
                <div className="header">
                    <h1>{itemDetails.data.modelName}</h1>
                    <img src={itemDetails.data.url}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    console.log(state);
    let itemDetails;
    state.data.map(item =>{
        if(item.id===id){
            itemDetails = item ;
        }
    });
    return{
        itemDetails: itemDetails
    }
} 


export default connect(mapStateToProps)(ItemDetails)