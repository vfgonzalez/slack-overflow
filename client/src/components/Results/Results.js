import React from "react";
import "./Results.css";
import { Button } from "react-materialize";
import { Icon } from "react-materialize";
import { Card } from "react-materialize";
import { CardTitle } from "react-materialize";
import { Row } from "react-materialize";
import { Col } from "react-materialize";
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col s={4}>
            <Card className="sticky-action card" header={<CardTitle reveal image={"http://via.placeholder.com/350x150"} waves='light' />}

              title={this.state.title}
              reveal={<p>{this.state.summary}</p>}>
              <p><a rel="noreferrer noopener" target="_blank" href={this.state.link}>{this.state.link}</a></p>
              <Button id="upvote" className="btn-upvote green" waves='light'><Icon center>thumb_up</Icon></Button>
              <Button id="downvote" className="btn-downvote red" waves='light'><Icon center>thumb_down</Icon></Button>
              <div id="voteCount"><p></p></div>
              <div id="author"><p>{this.state.author}</p></div>
              <div id="dateCreated"><p>{this.state.createAd}</p></div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Results;