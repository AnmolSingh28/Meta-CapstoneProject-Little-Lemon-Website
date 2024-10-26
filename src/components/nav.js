import React from "react";
import logo from "../../src/assets/little lemon logo.png";
import { Link } from "react-router-dom";

import"../../src/components/navbar.css";

const Nav = () => {
  return (
  <div className="navbar">
  
    <img src={logo} className="logo"alt="logos"/>
    <nav className="navbarmenu">
       
        <ul className="navs">
            <a className="linked"href="/"><li className="navitems">Home</li></a>
            <a className="linked"href="/"><li className="navitems">About</li></a>
            <a className="linked"href="/"><li className="navitems">Menu</li></a>
        <Link to="/Bookingpage" className="nav-reserve" > <li className="navitems">Reservations</li></Link>
            <a className="linked"href="/"><li className="navitems">Order Online</li></a>
          <a className="linked"href="/"><li className="navitems">Login</li></a>  
        </ul>
    </nav>
    </div>
    
  )
}

export default Nav
