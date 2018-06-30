import React, { Component } from 'react';
import { Modal, Button, Icon, Row } from 'react-materialize';
import { Input, FormBtn } from "../Form";
import API from '../../utils/API'
import './Login.css';
import { Route, Redirect } from 'react-router'

class Login extends Component {

  state = {
    username: "",
    password: "",
    redirect: false
  };

  validateUser = user => {
    if (user.password === this.state.password && user.accountLevel === 'Admin') {
      this.setState({ redirect: true })
    } else {
      console.log('Wrong Password')
    }
  }

  getUser = username => {
    console.log('querying for: ' + username)
    API.getUser(username)
      .then(res =>
        this.validateUser(res.data[0])
      )
      .catch(err => console.log(err))
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ username: this.state.username })
    this.setState({ password: this.state.password })
    this.getUser(this.state.username)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/admin' />
      // window.location.reload()
    }

    return (
      <div>

        <Modal
          header='Welcome Admin, Please login'
          trigger={<Button floating large id="admin-btn" className="transparent"><Icon large>settings</Icon></Button>}>
          <form>
            <Row>
            <Input
              s={12}
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              type="text"
              placeholder="Username (required)"
              />
            <Input
              s={12}
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Password (required)"
              />
            </Row>
            <FormBtn
              disabled={!(this.state.username && this.state.password)}
              onClick={this.handleFormSubmit}
            >
              Login
            </FormBtn>

            </form>
        </Modal>

      </div>
    )
  }
}

export default Login
