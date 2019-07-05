import React, { Component } from 'react';
import Book from './Book';
import '../CalendarModal/CalendarModal.scss'; 


class BookModal extends Component {
  state = {
    bookOpen: false
  }

  render() {
      const {bookOpen,isBookOpen,calendarClose} = this.props;
      if(isBookOpen){
        return (
            <div className="calendar-modal">
              <div className="calendar-container">
                  <Book
                  className="calendar"
                  />
                  <div className="calendar-buttons">
                    <button>BACK</button>
                    <button>CONTINUE</button>
                  </div>
              </div>
            </div>
          );
      }else{
          return null
      }
  }
}

export default BookModal