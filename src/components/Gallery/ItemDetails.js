import React, { Component } from 'react';
import './Gallery.scss';

class ItemDetails extends Component {

    render() {
        const {name,imgUrl} = this.props;
        console.log(name)
        return(
            <div className="item-details-container">
                <p>yonaaaaaaaaaaaaaaaa</p>
                <div className="header">
                    <h1>{name}</h1>
                </div>
            </div>
        )
    }
}

export default ItemDetails