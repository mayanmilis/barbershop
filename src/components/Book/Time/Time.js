import React, {Component} from 'react';
import '../Book.scss';

class Time extends Component {
    state={

    }

    render(){
        const {time,isAvailable,chosenTime} = this.props;
        if(isAvailable){
            return(
                <div className="time-container" onClick={() => chosenTime(time)}>
                    <div className="time">
                        {time}
                    </div>
                    <div className="is-available">
                        {isAvailable}
                    </div>
            </div>
            )
        }else{
            return(
                <div className="time-container">
                    <div className="time">
                        {time}
                    </div>
                    <div className="is-available">
                        {isAvailable}
                    </div>
            </div>
            )
        }

    }
}

export default Time