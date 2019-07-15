import React, { Component } from 'react';
import './Gallery.scss';

class Item extends Component {

  render() {
      const {id,name,imgUrl} = this.props;
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

export default Item