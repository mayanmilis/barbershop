import React, {Component} from 'react';
import Time from './Time/Time';
import './Book.scss';

class Book extends Component {
    state ={
        book:{
            "9:00": true,
            "9:30": true,
            "10:00": true,
            "10:30": false,
            "11:00": true,
            "11:30": true,
            "12:00": true
        },
        chosenTime: null
    }

    chosenTime = (time) =>{
        this.setState({
            chosenTime: time
        })
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
            console.log(this.state.chosenTime);
            return(
                <div className="book">
                    <h3>Choose Time</h3>
                    <ul>
                        {arr&&arr.map(item =>{
                            let time=item[0];
                            let isAvailable=item[1];
                            let style;
                            if(isAvailable){
                                style = "available";
                                if(this.state.chosenTime===time){
                                    style = "chosen-time"
                                }
                            }else{
                                style = "not-available";
                            }
                            return(
                                <li key={time} className={style}>
                                    <Time
                                    time={time}
                                    isAvailable={isAvailable}
                                    chosenTime={this.chosenTime}
                                    />
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