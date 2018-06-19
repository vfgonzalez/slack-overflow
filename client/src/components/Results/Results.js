import React from "react";
import "./Results.css";
import { Button } from "react-materialize";
import { Icon } from "react-materialize";
import { Card } from "react-materialize";
import { CardTitle } from "react-materialize";
const Results = props => (
  <Card className='small'
    header={<CardTitle image="http://via.placeholder.com/140x100">Resource Title</CardTitle>}
    actions={[<a href='#'>External Link</a>]}>
    Resource summary.
    <div>
      <Button waves='light'>Upvote<Icon left>arrow_upward</Icon></Button>
  
      <Button waves='light'>Downvote<Icon right>arrow_downward</Icon></Button>
    </div>
  </Card>
);

export default Results;