import React, { Component } from 'react';
import './Gallery.scss';
import Item from './Item';
import {getDataByCategory} from '../../store/actions/getDataAction';
import {connect} from 'react-redux';


class Gallery extends Component {

    state ={
        data: ''
    }

    componentWillMount(){
        let category = this.props.match.params.category;
        const id = this.props.match.params.id;
        this.props.getDataByCategory(category, id)
    }

  render() {
      let {data} = this.props;
      let category = this.props.match.params.category;
      let header = category.toUpperCase()
  return (
      <div>
                <div className="gallery">
                    <div className="gallery-container">
                        <div className="header">
                            <div className="h1-container">
                                <h1>{header}</h1>
                            </div>
                        </div>
                    <div className="items-container">
                        <ul>
                            {data&&data.map(item => {
                                return(
                                    <li key={item.id}>
                                        <Item
                                            id={item.id}
                                            name={item.data.modelName}
                                            imgUrl={item.data.url}
                                            category={category}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </div>
                </div>
      </div>

  );
  }
}

const mapStateToProps = (state, ownProps) => {
    let categoryData = [];
    let data = state.data;
    data.map(item =>{
        if(item.data.category===ownProps.match.params.category){
            categoryData.push(item)
        }
    });
    return {
      data: categoryData
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getDataByCategory: (category, id) => dispatch(getDataByCategory(category, id))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Gallery)