import React from "react";
import "./Results.css";
import { Button } from "react-materialize";
import { Icon } from "react-materialize";
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
            <Button waves='light'>Upvote<Icon left>arrow_upward</Icon></Button>
          </div>
          <div>
            <Button waves='light'>Downvote<Icon right>arrow_downward</Icon></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Results;