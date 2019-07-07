import React, {Component} from 'react';
import './Book.scss';

class Book extends Component {
    state ={
        book:{
            "9:00": "Available",
            "9:30": "Available",
            "10:00": "Available",
            "10:30": "Available",
            "11:00": "Available",
            "11:30": "Available",
            "12:00": "Available"
        },
        chosenTime: null

    }

    render() {
        const {isMan,isWoman} = this.props;
        console.log(isMan,isWoman)
        if(isMan){
            let book = this.state.book;
            let arr = [];
            for(let property in book){
                arr.push([property,book[property]])
            }

            console.log(arr);
            return(
                <div className="book">
                    <h3>Choose Time</h3>
                    <ul>
                        {arr&&arr.map(item =>{
                            return(
                                <li>
                                    <div className="time-container">
                                        <div className="time">
                                            {item[0]}
                                        </div>
                                        <div className="is-available">
                                            {item[1]}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }else if(isWoman){
            return(
                <div>
                    <h3>Choose Time</h3>
              </div>
            )
        }else{
            return null
        }

    }
}

export default Book