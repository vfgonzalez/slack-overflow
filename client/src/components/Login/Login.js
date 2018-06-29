import React, { Component } from 'react';
import { Modal, Button, Icon, Row } from 'react-materialize';
import { Input, FormBtn } from "../Form";
import API from '../../utils/API'
import './Login.css';
import { Redirect } from 'react-router'




class Login extends Component {

  state = {
    categoryName: '',
    resources: [],
    title: "",
    link: "",
    description: "",
    username: "",
    password: "",
    value: "",
    user: [],
    navigate: false,
    referrer: null,
    redirect: false
  };

//   constructor(props) {
//     super(props);
//     this.state = {
//         navigate: false,
//         referrer: null,
//         username: '',
//         password: ''
//     };
// }






  validateUser = user => {
    if (user.password === this.state.password && user.accountLevel === 'Admin') {
          this.setState({ redirect: true })

          // this also works with react-router-native
          
          // const redirect = withRouter(({ history }) => (
          //   <button
          //     type='button'
          //     onClick={() => { history.push('/new-location') }}
          //   >
          //     Click Me!
          //   </button>
          // ))
          // this.props.history.push("/admin");
          // this.props.history.push('/admin')
          // this.props.router.push('/admin')
          // browserHistory.push('/admin')

          // browserHistory.push('/admin')
          // <Route exact path="/" render={() => (
          //   loggedIn ? (
          //     <Redirect to="/admin"/>
          //   ) : (
          //     <PublicHomePage/>
          //   )
          // )}/>

          // this.setState({referrer: '/admin'})
          // window.location = '/admin';


    } else {
      console.log('Wrong Password')
    }
  }

  getUser = username => {
    console.log('querying for: ' + username)
    API.getUser(username)
    .then(res =>
    // console.log(res.data[0].password)
    // let userData = res.data[0]
    // this.setState({ user: res.data[0] }),
    this.validateUser(res.data[0]),
    // this.validateUser()
    
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
       return <Redirect to='/admin'/>
      }

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
            <Row>

            <Input
              active
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              type="text"
              placeholder="Username (required)"
              />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Password (required)"
              />
            </Row>
            <FormBtn
            className="green"
            // disabled={!(this.state.author && this.state.title)}
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
