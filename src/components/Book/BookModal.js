import React, { Component } from 'react';
import Book from './Book';
import '../CalendarModal/CalendarModal.scss'; 


class BookModal extends Component {
  state = {
    bookOpen: false,
    isMan: null,
    isWoman: null
  }

  isMan = () => {
    let isMan = this.state.isMan;
    isMan = true;
    this.setState({
      isMan: isMan,
      isWoman: !isMan
    });
  }

  isWoman = () => {
    let isWoman = this.state.isWoman;
    isWoman = true;
    this.setState({
      isWoman: isWoman,
      isMan: !isWoman
    });
  }

  homaPage = () => {
    setTimeout(()=> window.location = "/", 3000);
  }

  render() {
      const {bookOpen,isBookOpen,calendarClose,bookClose,calendarOpen,confirmationOpen} = this.props;
      if(isBookOpen){
        return (
            <div className="calendar-modal">
              <div className="calendar-container">
                  <div className="book-modal-container">
                      <div className="book-choose-gender">
                          <h3>You are a: </h3>
                          <div className="buttons-container">
                            <button onClick={this.isMan}>Man</button>
                            <button onClick={this.isWoman}>Woman</button>
                          </div>
                      </div>
                      <Book
                        isMan={this.state.isMan}
                        isWoman={this.state.isWoman}
                      />
                  </div>
                  <div className="calendar-buttons">
                    <button onClick={
                        () =>{
                            bookClose();
                            calendarOpen();
                        } 
                    }>BACK</button>
                    <button onClick={
                      () =>{
                      bookClose();
                      confirmationOpen();
                      this.homaPage();
                    }}>CONTINUE</button>
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