import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './CalendarModal.scss'; 


class CalendarModal extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date });

  render() {
    let {calendarOpen, calendarClose, isBookOpen, bookOpen} = this.props;
    let newDate;
    if(calendarOpen){
      let date;
      if(this.state.date){
          date = this.state.date;
          date = date.toString();
          newDate = date.split(' ').slice(0,4).join('_');
          console.log(newDate)
      }else{
          return date = "Choose Date";
      }
  return (
    <div className="calendar-modal">
      <div className="calendar-container">
          <Calendar
              onChange={this.onChange}
              value={this.state.date}
              calendarType="Hebrew"
              tileDisabled={this.tileDisabled}
              className="calendar"
              formatMonthYear={this.formatMonthYear}
          />
          <div className="calendar-buttons">
            <button onClick={() => calendarClose()}>BACK</button>
            <button onClick={() =>{
              calendarClose();
              bookOpen();
            }}>
              CONTINUE</button>
          </div>
      </div>
    </div>
  );
    }else{
      return null
    }
  }
}

export default CalendarModal