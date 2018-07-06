import React, { Component } from "react";
import { Col, CollapsibleItem, Collapsible, Button, Icon, Card, CardTitle } from "react-materialize";
import API from "../../utils/API";
import './UserResult.css'

class UserResult extends Component {

  state = {
    username: "",
    accountLevel: "",
    cohortname: "",
    date: "",
    _id: ""
  }

  componentDidMount() {
    const { username, accountLevel, cohortname, date, _id } = this.props.children

    this.setState({
      username,
      accountLevel,
      cohortname,
      date,
      _id
    })

  }

  render() {

    return (

      <div className="userResult">
        <h4>Username: {this.state.username}</h4>
        <p>ID: {this.state._id}</p>
        <p>Account Level: {this.state.accountLevel}</p>
        <p>Cohort: {this.state.cohortname}</p>
        <p>Date: {this.state.date}</p>
      </div>

    );
  }
}

export default UserResult;