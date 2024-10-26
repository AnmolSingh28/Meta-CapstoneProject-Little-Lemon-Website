import "../../src/components/main.css";
import React from "react";
import Swal from "sweetalert2";
import recipes from "../recipes";

const Main = () => {
  const handleOrder=(id)=>{
    Swal.fire({
      title: "Order Confirmation",
      text: "Do you really want to order this?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Order Placed!",
          text: "Your order for has been placed.",
          icon: "success"
        });
      }
    });
    
  }
  return ( 
  <div className="menu-main">
    <header className="head2">
      <div className="header">
      This week's special!
       
     <button className="btn1">Order Menu</button>
       
      </div>
      </header>
    <div className="menus">
      
      
      <div className="cards">
      {recipes.map((recipe)=>(
        <div key={recipe.id} className="holder">
          <img src={recipe.image}  className="imgs"alt={recipe.title}/>
          <div className="content">
            <div className="heading">
              <h3>{recipe.title}</h3>
              <p>${recipe.price}</p>
            </div>
            <p>{recipe.description}</p>
            <div className="button"> <button className="btn2" onClick={()=>handleOrder(recipe.id)}>Order Now!</button></div>
           
          </div>
        </div>
      ))}
      </div>
      
    </div>
    </div>
  )
}

export default Main
