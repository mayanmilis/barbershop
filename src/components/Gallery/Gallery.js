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
        let category = this.props.match.params.category;
        database.collection("Images").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                if(doc.data().category===category){
                    data.push({id:doc.id,data:doc.data()})
                    console.log(doc.id, " => ", doc.data());
                }

            });
        }).then(()=>{
            this.setState({
                data: data
            })
        })
    }
  render() {
      console.log(this.props)
      let data = this.state.data;
      let category = this.props.match.params.category.toUpperCase();
  return (
      <div>
                <NavLinks/>
                <div className="gallery">
                    <div className="gallery-container">
                        <div className="header">
                            <h1>{category}</h1>
                        </div>
                        <ul>
                            {data&&data.map(item => {
                                return(
                                    <li key={item.id}>
                                        <Item
                                            id={item.id}
                                            name={item.data.modelName}
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