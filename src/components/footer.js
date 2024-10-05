import "../../src/components/footer.css";
import React from "react";
import fb from "../../src/assets/facebook_2504903.png";
import footimg from "../../src/assets/restaurant.jpg";
import insta from "../../src/assets/instagram_2111463.png";
import tweet from "../../src/assets/twitter-alt-square_12107611.png";

const Footer = () => {
  return (
    <div>
    <content className="footer-section">
    <footer className="footer-contains">
      <div className="foot-img">
        <img src={footimg} height={"300px"} width={"150px"} alt="footerimage"/>
      </div>
      
      <div className="nav-lists"> 
        <ul>
           
            <a href="/" className="listtems">Home</a>
            <a href="/" className="listtems">About</a>
            <a  href="/"className="listtems">Menu</a>
            <a href="/" className="listtems">Reservations</a>
            <a  href="/"className="listtems">Order Online</a>
            <a href="/" className="listtems">Login</a>
            
         
        </ul>
      </div>
      
      <div className="address-cont">
        <h3>Contact</h3>
        <h4 className="address">
          Little Lemon <br/>
          331 E Chicago <br/>
          LaSalle Street Chicago, <br/>
          Illinois 60602 <br/>
          USA
        </h4>
        <a href="tel:+55 11 9999-9999">+55 11 9999-9999</a> <br/> <br/>
        <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
      </div>
      
      <div className="social-media">
        <h3>Socials</h3>
        <img src={fb} height="60px" width="60px"alt="icon"/>
        <img src={insta} height="60px" width="60px"alt="icon"/>
        <img src={tweet} height="60px" width="60px"alt="icon"/>
        
      </div>
     
    </footer>
   
    </content>
     <div className="footer-text-ti">
     <h4 className="text-foot-1">Developed by Anmol using ReactJS</h4> 
     <h4 className="text-foot-2">©2024 Little Lemon.All Rights Reserved</h4>
   </div>
    
   </div>
  )
}

export default Footer
