import React from "react";
import "./Heading.css";


// Renders the function display through categories, replicating the view of a function.
const Heading = () => (

  <div className="heading">
    <p>
      <span className="purps">
        
      </span>

      <span className="secondColor">
        {"selectCategory"}

      </span>

      <span>
        {" ()   {"}

      </span>

    </p>
    <p>
    <span className="purps">
        {"return "}
      </span>

      <span>
        {"("}
      </span>
    </p>

      

  </div>

);

export default Heading;