import "./App.css";
import BookingPage from "./components/Bookingpage";
import Home from "./pages/home";
import PopupConfirm from "./components/popup";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
     
     <Router>
    
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Bookingpage" element={<BookingPage/>}/>
        
       
        
        
        
      </Routes>
      
     </Router>
    
    </div>
  );
}

export default App;
