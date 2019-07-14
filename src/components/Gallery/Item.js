import React, { Component } from 'react';
import './Gallery.scss';

class Item extends Component {

  render() {
      const {id,description,imgUrl} = this.props;
  return (
    <div className="item">
        <div className="item-container">
            <div className="img" style={{backgroundImage: `url(${imgUrl})`}}></div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
  }
}

export default Item