import React, { Component } from "react";
import "./Results.css";
import { Col, CollapsibleItem, Collapsible, Button, Icon, Card, CardTitle } from "react-materialize";
import API from "../../utils/API";

class Results extends Component {

  state = {
    title: "",
    category: "",
    createAd: "",
    createdAt: "",
    description: "",
    link: "",
    voteCount: "",
    _id: "",
    author: ""
  }

  componentDidMount() {
    const { title, category, createAt, createAd, description, link, voteCount, _id, author } = this.props.children

    this.setState({
      //you can also do it like this - title: title,

      title,
      category,
      createAt,
      createAd,
      description,
      link,
      voteCount,
      _id,
      author
    })

  }

  vote = (direction) => {
    let { voteCount } = this.state;
    if (direction === 'up') {
      API.castVote(this.state._id, { voteCount: 1 })
        .then((data) => {
          console.log('data', data);
          if (data.status === 200) {
            voteCount += 1;
            this.setState({ voteCount });
          }
        });
    } else if (direction === 'down') {
      API.castVote(this.state._id, { voteCount: -1 })
        .then((data) => {
          console.log('data', data);
          voteCount -= 1;
          this.setState({ voteCount });
        });
    } else {
      console.log(`${direction} is not valid!`);
    }
  }

  render() {
    return (
      <Col m={12}>
        {/* <Card className="sticky-action card md-6" header={<CardTitle waves='light' />}
          title={this.state.title}
          actions={<p>{this.state.description}</p>}>
          <div id="verification-status">[VERIFIED-STATUS-BADGE]{this.state.verified}</div>
          <div id="resource-link"><a href={this.state.link} target="_blank">{this.state.link}</a></div>
          <br />
        </Card> */}
      {/* <Col m={4}> */}

        {/* <Collapsible popout defaultActiveKey={2}> */}
          <CollapsibleItem header={this.state.title}>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        {/* </Collapsible> */}

        {/* <Card className="sticky-action card md-6"
          // header={<CardTitle
          // reveal image={"http://via.placeholder.com/350x150"} 
          // waves='light' />}
          title={this.state.title}
          reveal={<p>{this.state.description}</p>}>

          <Button className="transparent z-depth-0">
            <p>
              <a className="red-text"
                rel="noreferrer noopener"
                target="_blank"
                href={this.state.link}>View Article
                </a>
            </p>
          </Button>

          <br />

          <Button
            id="upvote"
            className="btn-upvote green"
            waves='light'
            onClick={() => this.vote('up')}
          >
            <Icon center>thumb_up</Icon>
          </Button>

          <Button
            id="downvote"
            className="btn-downvote red"
            waves='light'
            onClick={() => this.vote('down')}
            disabled={this.state.voteCount === 0 ? true : false}
          >
            <Icon center>thumb_down</Icon>
          </Button>

          <br />

          <div id="voteCount"><p>{this.state.voteCount}</p></div>
          <div id="author"><p>{this.state.author}</p></div>
          <div id="dateCreated"><p>{this.state.createAd}</p></div>

        </Card> */}
      </Col>
    );
  }
}

export default Results;