import "../../src/components/info.css";
import Bro1 from "../../src/assets/Mario_and_Adrian_A.jpg";
import Bro2 from "../../src/assets/Mario_and_Adrian_B.jpg";
import React from "react";

const Info = () => {
  return (
    <div className="inform">
      <div className="containers">
        <column className="texts">
        <h1 className="Little">Little Lemon</h1>
        <h3>Chicago</h3>
        <p className="par">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.

To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region. </p>
      </column>
      <div className="photsection">
        <img src={Bro1} className="brother1" height={"400px"} width={"350px"} alt="phot1"/>
        <img src={Bro2} className="brother2" height={"400px"} width={"350px"} alt="phot2"/>
      </div></div>
      
      
    </div>
  )
}

export default Info
