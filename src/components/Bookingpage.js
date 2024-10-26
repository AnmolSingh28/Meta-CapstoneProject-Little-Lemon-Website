import "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../src/components/Bookingpage.css";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import Footer from "./footer";
import Modal from "react-bootstrap/Modal";
import Nav from "./nav";
import PopupConfirm from "./popup";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const[bookingDetails,setBookingDetails]=useState({
    date:new Date(),
    time:"10:00AM",
    guests:1,
    occasion:"Birthday",
  });
  
  const navigate = useNavigate();
  const[modal,setModal]=useState(false);
  const[errors,setErrors]=useState({});
  
  const handleInputChange=(e)=>{
    
    const {name,value}=e.target;
    setBookingDetails((prevDetails)=>({
      ...prevDetails,
      [name]:value,
    }));
   
  }
 
  const handleDateChange=(date)=>{
    setBookingDetails((prevDetails)=>({
      ...prevDetails,
      date:date,
      
    }))
  }
  const validate=()=>{
    const {date,time,guests,occasion}=bookingDetails;
    const newErrors={};
    if (!date) newErrors.date="Date is required";
    if(!time) newErrors.time="Time is required";
    if(guests<1) newErrors.guests="Less than one guest how?? Please add a guest";
    if(!occasion) newErrors.occasion="Occasion is required";
    return newErrors;
  }
  
   const handleBookSubmit=(e)=>{
    e.preventDefault();
    const formErrors=validate();
    if(Object.keys(formErrors).length===0){
      setModal(true);
      setErrors({});
    
      
    }
    else{
      setErrors(formErrors);
    }
    
    
  };
  
  const closeModal = () => {
    setModal(false);
  };
  
    
  
return (
  
    <div className="Booking-section">
      <Nav/>
      <form  onSubmit={handleBookSubmit} className="book-food">
        <div className="book-food-div">
        <h2 className="header-booking"> Book Now! </h2>
        <div className="date-picker">
          <label className="labelled-date">Choose a Date</label>
        <DatePicker
        selected={bookingDetails.date}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        placeholder="Select a date"
        className="date-picker-input"
        />
        {errors.date && <small className="text-danger">{errors.date}</small>}
        </div>
        <div className="time-picker">
          <label>Pick a Time</label>
          <select 
          name="time"
          className="time-picker-select"
          value={bookingDetails.time}
          onChange={handleInputChange}
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
          {errors.time && <small className="text-danger">{errors.time}</small>}
        </div>
        
        <div className="number-guests">
          <label className="number-label-guests">
            Number of Guests
          </label>
          <input 
          name="guests"
          value={bookingDetails.guests}
          className="input-guests"
         onChange={handleInputChange}
          />
         {errors.guests && <small className="text-danger">{errors.guests}</small>}
        </div>
        <div className="occasion-select">
          <label className="occasion-label">Select an occasion</label>
          <select
          className="select4"
          name="occasion" 
          value={bookingDetails.occasion}
          id="occasion"
          onChange={handleInputChange}
         >
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
          <option value={"Birthday"}>Birthday</option>
          </select>
          {errors.occasion && <small className="text-danger">{errors.occasion}</small>}
        </div>
        <div className="btn-submit">
        <button onClick={handleBookSubmit} className="btn-submit-btn">Reserve</button>
        </div>
        </div>
      </form>
      
     {modal &&(
      <PopupConfirm
      onClose={()=>{
        setModal(false);
        navigate("/bookingpage");
      }}
      title="Thank you for the reservation!"
      date={bookingDetails.date}
      time={bookingDetails.time}
      guests={bookingDetails.guests}
      occasion={bookingDetails.occasion}
      
     
      />
     )}
      <Footer/>
    </div>
  )
};

export default BookingPage;
