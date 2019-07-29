import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.scss';

class Item extends Component {

  render() {
      const {id,name,imgUrl,category,price} = this.props;
      if(category==="products"){
        return(
          <div className="item">
          <div className="item-container">
              <div className="item-details">
                <Link to={`/gallery/${category}/${id}`}>More Details</Link>
              </div>
              <div className="img" style={{backgroundImage: `url(${imgUrl})`}}></div>
              <div className="description-container">
                <div className="description">
                  <p id="itemName">{name}</p>
                  <p id="itemPrice">{price}</p>
                </div>
              </div>
          </div>
      </div>
        )
      }else{
        return (
          <div className="item">
              <div className="item-container">
                  <div className="img" style={{backgroundImage: `url(${imgUrl})`}}></div>
                  <div className="description">
                      <p>{name}</p>
                  </div>
              </div>
          </div>
        );
      }
  }
}

export default Item