import React, { Component } from 'react';
import './Gallery.scss';
import Item from './Item';
import {getDataByCategory} from '../../store/actions/getDataAction';
import {connect} from 'react-redux';


class Gallery extends Component {

    state ={
        searchInput: ''
    }

    componentWillMount(){
        let category = this.props.match.params.category;
        const id = this.props.match.params.id;
        this.props.getDataByCategory(category, id);
    }

    onChangeSearch = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

  render() {
      let {data} = this.props;
      let category = this.props.match.params.category;
      let header = category.toUpperCase();
      console.log(this.state)
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
                                    <button>SEARCH</button>
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
    console.log(state)
    let data = state.data;
    return {
      data: data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getDataByCategory: (category, id) => dispatch(getDataByCategory(category, id))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Gallery)