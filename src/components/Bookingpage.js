import "../../src/components/Bookingpage.css";
import React from "react";
import { useState } from "react";

const BookingPage = () => {
  const[date,setDate]=useState(new Date());
  const[time,setTime]=useState("10:00 AM");
  const[guests,setGuests]=useState(1);
  const[occasion,setOccasion]=useState("Birthday");
  const[modal,setModal]=useState(false);
  const handleSubmit=(e)=>{
    e.prevent.default();
    setModal(true);
  }
  const closeModal=()=>{
    setModal(false);
  }
  const handleTimeChange=((e)=>{
    setTime((prev)=>({
      ...prev,
      time: e.target.value(),
      
    }))
      
  
  })
    
  
return (
    <div className="Booking-section">
      <form className="book-food">
        <h2>Book Now!</h2>
        <div className="date-picker">
        
        </div>
        <div className="time-picker">
          <label>Pick a Time</label>
          <select 
          className="time-picker-select"
          value={time}
          onChange={handleTimeChange}
          >
          <option value="10:00">10:00 AM</option>
          <option value="10:30">10:30 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="11:30">11:30 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="12:30">12:30 PM</option>
          <option value="13:00">13:00 PM</option>
          <option value="13:30">13:30 PM</option>
          <option value="14:0">14:00 PM</option>
          </select> 
        </div>
        
        <div className="number-guests">
          <label className="number-label-guests">
            Number of Guests
          </label>
          <input 
          value={guests}
          className="input-guests"
          onChange={(e)=>{
            setGuests((previous)=>({
              ...previous,
              guests:e.target.value(),
            }))
          }}/>
         
        </div>
        <div className="occasion-select">
          <label className="occasion-label">Select an occasion</label>
          <select 
          value={occasion}
          id="occasion"
          onChange={(e)=>{
            setOccasion((previous)=>({
              ...previous,
              occasion:e.target.value(),
            }))
          }}
         >
            
          </select>
        </div>
      </form>
      
    </div>
  )

}
export default BookingPage  ;
