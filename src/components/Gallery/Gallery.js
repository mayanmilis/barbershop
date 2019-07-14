import React, { Component } from 'react';
import './Gallery.scss';
import Item from './Item';
import NavLinks from '../NavLinks/Navlinks';
import {database} from '../../fbConfig/fbConfig';


class Gallery extends Component {

    state ={
        data: ''
    }

    componentWillMount(){
        this.getData();
    }

    getData = () =>{
        let data = [];
        database.collection("Images").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                data.push({id:doc.id,data:doc.data()})
                console.log(doc.id, " => ", doc.data());
            });
        }).then(()=>{
            this.setState({
                data: data
            })
        })
    }
  render() {
      console.log(this.state.data)
      let data = this.state.data;
  return (
      <div>
          <NavLinks/>
                <div className="gallery">
                <div className="header">
                    <h1>Men Gallery</h1>
                </div>
                <div className="gallery-container">
                    <ul>
                        {data&&data.map(item => {
                            return(
                                <li key={item.id}>
                                    <Item
                                        id={item.id}
                                        description={item.description}
                                        imgUrl={item.data.url}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
      </div>

  );
  }
}

export default Gallery