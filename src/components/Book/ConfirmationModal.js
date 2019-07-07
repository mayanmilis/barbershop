import React, {Component} from 'react';
import '../CalendarModal/CalendarModal.scss';
import {Redirect} from 'react-router-dom';

class ConfirmationModal extends Component {

    render(){
        const {confirmationOpen} = this.props;
        if(confirmationOpen){
            return (
                <div className="calendar-modal">
                  <div className="calendar-container">
                      <div className="confirmation-modal-container">
                          <h1>Thank You!</h1>
                      </div>
                  </div>
                </div>
              );
          }else{
              return null
          }
    }
}

export default ConfirmationModal