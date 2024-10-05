import "../../src/components/testimonials.css";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="testimonials">
        <section className="rating-section">
            <h1 className="test-title">Testimonials</h1>
            <p className="test-para">Our customers have a lot to say about our services.<br/> Their reviews helps us to improve the overall experience of Little Lemon.</p>
        </section>
        
        <div className="ratings">
          <div className="ratting"> 
            <card className="card-rating">
                
                <img className="phots" width={"100px"} height={"100px"} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img"/>
                <h3 className="name8">Peter Jackson</h3>
                <ul className="rating-stars">
                   
                     
                      <li className="ratings-stars">
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      </li>
                   
                    
                     
                    
                      
                     
                    
                </ul>
                <p className="abouts">Great ambiance with cozy seating. The service was quick and friendly, and the food was flavorful,<br/> especially the pasta! However, the dessert options were limited. Overall, a solid dining experience."</p>
            
            
            
            </card>
            </div>
            
            <div className="ratting"> <card className="card-rating">
                
                <img  className="phots"src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img"/>
                <h3 className="name8">Walter Grey</h3>
                <ul className="rating-stars">
                   
                     
                      <li className="ratings-stars">
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      <FaStarHalfAlt/>
                      </li>
                   
                    
                     
                    
                      
                     
                    
                </ul>
                <p className="abouts">Great ambiance with cozy seating. The service was quick and friendly, and the food was flavorful,<br/> especially the pasta! However, the dessert options were limited. Overall, a solid dining experience."</p>
            
            
            
            </card>
            </div>
           
            <div className="ratting">
            <card className="card-rating">
                
                <img className="phots"src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="img"/>
                <h3 className="name8">Jessica Walkman</h3>
                <ul className="rating-stars">
                   
                     
                      <li className="ratings-stars">
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      < FaRegStar/> 
                      </li>
                   
                    
                     
                    
                      
                     
                    
                </ul>
                <p className="abouts">Great ambiance with cozy seating. The service was quick and friendly, and the food was flavorful,<br/> especially the pasta! However, the dessert options were limited. Overall, a solid dining experience."</p>
            
            
            
            </card>
            </div>
           
            <div className="ratting">
            <card className="card-rating">
                
                <img className="phots" src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="img"/>
                <h3 className="name8">Skylar Walker</h3>
                <ul className="rating-stars">
                   
                     
                      <li className="ratings-stars">
                      <FaStar/> 
                      <FaStar/> 
                      <FaStar/> 
                      <FaStarHalfAlt/> 
                      <FaRegStar/> 
                      </li>
                   
                    
                     
                    
                      
                     
                    
                </ul>
                <p className="abouts">Great ambiance with cozy seating. The service was quick and friendly, and the food was flavorful,<br/> especially the pasta! However, the dessert options were limited. Overall, a solid dining experience."</p>
            
            
            
            </card>
            </div>
           
            </div>
        
      
    </div>
  )
}

export default Testimonials
