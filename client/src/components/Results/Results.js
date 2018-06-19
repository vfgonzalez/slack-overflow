import React from "react";
import "./Results.css";

const Results = props => (
  <div className="row">
    <div className="col s12 m3">
      <div className="card-panel teal">
        <div className="card-content">
          <div className="card-title">
          Resource title
          </div>
          <div className="card-image">
          Category image
          </div>
          <div className="card-content">
          Resource summary
          </div> 
          <div>
            <button waves="light">Upvote</button>
          </div>
          <div>
            <button waves="light">Downvote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Results;