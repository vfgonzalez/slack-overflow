import React from "react";
import "./Results.css";
import { Button } from "react-materialize";
import { Icon } from "react-materialize";
import { Card } from "react-materialize";
import { CardTitle } from "react-materialize";
import { Row } from "react-materialize";
import { Col } from "react-materialize";
const Results = props => (
  <div className="container">
    <Row>
      <Col s={4}>
        <Card className="sticky-action card" header={<CardTitle reveal image={"http://via.placeholder.com/350x150"} waves='light' />}
          title="Impressive Resource Title"
          reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur.</p>}>
          <p><a href="#">http://www.linkgoeshere.com/</a></p>
          <Button className="btn-left green" waves='light'><Icon center>arrow_upward</Icon></Button>
          <Button className="btn-right red" waves='light'><Icon center>arrow_downward</Icon></Button>
        </Card>
      </Col>
      <Col s={4}>
        <Card className="sticky-action card" header={<CardTitle reveal image={"http://via.placeholder.com/350x150"} waves='light' />}
          title="Impressive Resource Title"
          reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.</p>}>
          <p><a href="#">http://www.linkgoeshere.com/</a></p>
          <Button className="btn-left green" waves='light'><Icon center>arrow_upward</Icon></Button>
          <Button className="btn-right red" waves='light'><Icon center>arrow_downward</Icon></Button>
        </Card>
      </Col>
      <Col s={4}>
        <Card className="sticky-action card" header={<CardTitle reveal image={"http://via.placeholder.com/350x150"} waves='light' />}
          title="Impressive Resource Title"
          reveal={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.</p>}>
          <p><a href="#">http://www.linkgoeshere.com/</a></p>
          <Button className="btn-left green" waves='light'><Icon center>arrow_upward</Icon></Button>
          <Button className="btn-right red" waves='light'><Icon center>arrow_downward</Icon></Button>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Results;