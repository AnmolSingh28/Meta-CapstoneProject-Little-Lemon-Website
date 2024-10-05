import "../../src/components/header.css";
import React from "react";

import bannerimg from"../../src/assets/restauranfood.jpg";
const Header = () => {
  return (
    <header className="head">
      <section className="sec">
        <div className="content">
          <h2 className="title">
            Little Lemon
          </h2>
          <h3 className="chica">Chicago</h3>
          <p className="info">We are family owned Mediterranean restaurant, <br/>focused on traditional recipes served with a modern twist.</p>
         <button  className="btn">Reserve a Table</button> 
        </div>
        <div className="banner">
          <img src={bannerimg} height={"375px"} width={"325px"} alt="images"/>
        </div>
        
      </section>
      
    </header>
  )
}

export default Header
