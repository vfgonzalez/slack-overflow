import React, { Component } from "react";
import "./Results.css";
import { Button, Icon, Card, CardTitle } from "react-materialize";

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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4">
            <Card header={<CardTitle reveal image={"http://via.placeholder.com/350x150"} waves='light' />}
              title={this.state.title}
              reveal={<p>{this.state.description}</p>}>
              <Button><p><a className="link" rel="noreferrer noopener" target="_blank" href={this.state.link}>View Article</a></p></Button>
              <Button id="upvote" className="btn-upvote green" waves='light'><Icon center>thumb_up</Icon></Button>
              <Button id="downvote" className="btn-downvote red" waves='light'><Icon center>thumb_down</Icon></Button>
              <div id="voteCount"><p>{this.state.voteCount}</p></div>
              <div id="author"><p>{this.state.author}</p></div>
              <div id="dateCreated"><p>{this.state.createAd}</p></div>
            </Card>
          </div>
        </div >
      </div >
    );
  }
}

export default Results;