import React, { Component } from 'react';
import { Modal, Button, Row, Icon } from 'react-materialize';
import { Input, FormBtn } from "../Form";
import API from '../../utils/API'
import './Login.css';

class Login extends Component {

  state = {
    categoryName: '',
    resources: [],
    title: "",
    link: "",
    description: "",
    username: "",
    password: "",
    value: ""
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  getUser = username => {
    console.log('querying for: ' + username)
    API.getUser(username)
    .then(res => 
    console.log(res.data)
    )
    .catch(err => console.log(err))
  }


  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Login Button Pressed')
    console.log(this.state.username)
    console.log(this.state.password)
    this.getUser(this.state.username)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    return (

      <div>

        <Modal
          header='Welcome Admin, Please login'
          trigger={<Button floating large id="admin-btn" className="transparent"><Icon large>settings</Icon></Button>}>
          <form>
            {/* <Row> */}
            {/* <Input s={12} label="Email" validate><Icon>account_circle</Icon></Input> */}

            {/* <Input
                s={12}
                label="User Name"
                validate
                value={this.state.username}
                onChange={this.handleInputChange}
              >
                <Icon>account_circle</Icon>
              </Input>

              <Input
                s={12}
                label="Password"
                type='password'
                validate>
                <Icon>lock</Icon>
              </Input> */}

            {/* </Row> */}

            {/* <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn> */}
            {/* <Button onClick={this.handleFormSubmit}>Login</Button> */}


            {/* FROM SIGNUPFORM */}
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username (required)"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password (required)"
            />
            <FormBtn
            className="left"
              // disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >Login</FormBtn>







          </form>
        </Modal>

      </div>





    )
  }
}

export default Login;
