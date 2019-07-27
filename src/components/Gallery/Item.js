import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.scss';
import ItemDetails from './ItemDetails';

class Item extends Component {

  render() {
      const {id,name,imgUrl,category} = this.props;
      if(category==="products"){
        return(
          <div className="item">
          <div className="item-container">
              <div className="item-details">
                <Link to={`/gallery/${category}/${id}`}>More Details</Link>
              </div>
              <div className="img" style={{backgroundImage: `url(${imgUrl})`}}></div>
              <div className="description">
                  <p>{name}</p>
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