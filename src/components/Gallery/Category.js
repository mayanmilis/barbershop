// import React, { Component } from 'react';
// import './Gallery.scss';
// import Item from './Item';
// import {connect} from 'react-redux';


// class Category extends Component {

//     state ={
//         data: ''
//     }

//   render() {
//       let {data} = this.props;
//       let category = this.props.match.params.category;
//       console.log(this.props)
//       let header = category.toUpperCase()
//   return (
//       <div>
//                 <div className="gallery">
//                     <div className="gallery-container">
//                         <div className="header">
//                             <div className="h1-container">
//                                 <h1>{header}</h1>
//                             </div>
//                         </div>
//                     <div className="items-container">
//                         <ul>
//                             {data&&data.map(item => {
//                                 return(
//                                     <li key={item.id}>
//                                         <Item
//                                             id={item.id}
//                                             name={item.data.modelName}
//                                             imgUrl={item.data.url}
//                                             category={category}
//                                         />
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     </div>
//                     </div>
//                 </div>
//       </div>

//   );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//     console.log(state)
//     let categoryData = [];
//     let data = state.data;
//     data.map(item =>{
//         if(item.data.category===ownProps.match.params.category){
//             categoryData.push(item)
//         }
//     });
//     return {
//       data: categoryData
//     }
//   }
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//     //   getData: (category) => dispatch(getData(category))
//     }
//   }

// export default connect(mapStateToProps,mapDispatchToProps)(Category)