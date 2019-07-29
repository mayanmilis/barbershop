import React, { Component } from 'react';
import './Gallery.scss';
import Item from './Item';
import {getDataByCategory,search} from '../../store/actions/getDataAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Gallery extends Component {

    state ={
        searchInput: ''
    }

    componentWillMount(){
        this.getData();
    }

    onChangeSearch = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    search = () =>{
        let searchInput = this.state.searchInput;
        let category = this.props.match.params.category;
        this.props.search(category,searchInput);
    }

    getData = () =>{
        let category = this.props.match.params.category;
        const id = this.props.match.params.id;
        this.props.getDataByCategory(category, id);
    }

  render() {
      let {data} = this.props;
      let category = this.props.match.params.category;
      let header = category.toUpperCase();
      console.log(this.state)
      if(data.length > 0){
        return (
            <div>
                      <div className="gallery">
                          <div className="gallery-container">
                              <div className="header">
                                  <div className="h1-search-container">
                                      <div className="h1-container">
                                          <h1>{header}</h1>
                                      </div>
                                      <div className="search-container">
                                          <input type="text" id="searchInput" placeholder="Search Product..." onChange={this.onChangeSearch}/>
                                          <button onClick={this.search}>SEARCH</button>
                                      </div>
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
                                                  price={item.data.price}
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
      }else{
          return(
            <div className="item-not-found">
                <h1>Sorry, item not found...</h1>
                <Link to="/gallery/products" onClick={this.getData}><button>Back To Products List</button></Link>
            </div>
          )

      }

  }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    let data = state.data;
    return {
      data: data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getDataByCategory: (category, id) => dispatch(getDataByCategory(category, id)),
      search: (category, searchInput) => dispatch(search(category, searchInput))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Gallery)