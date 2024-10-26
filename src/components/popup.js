import "../../src/components/popup.css";
import Button from "react-bootstrap/esm/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const PopupConfirm = ({title,onClose,date=new Date(),guests,occasion,time,newTimes}) => {
  const navigate=useNavigate();
  const newDate=date.toLocaleDateString();
  
  const newGuests=guests;
  const newOccasion=occasion;
 
 
  return (
    <div className="popup">
      <card className="popup-card">
        <div className="popup-main-card">
      <h1><strong>{title}</strong></h1>
      <div className="modal-content">
      <p> Your reservation request has been received.</p>
        <p ><strong className="content-text">Date:</strong>{newDate}</p>
        <p><strong className="content-text">Time:</strong>{time}</p>
        <p><strong className="content-text">Guests:</strong>{newGuests}</p>
        <p><strong className="content-text">Occasion:</strong>{newOccasion}</p>
      
      </div>
      <p className="excited"> <strong>Excited to see you at Little Lemon!</strong></p>
      <button className="btn-modal" onClick={onClose}>Close</button>
      </div>
      </card>
    </div>
  )
}

export default PopupConfirm
