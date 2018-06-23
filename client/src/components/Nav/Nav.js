

import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Login from '../Login/Login'
// import NewPost from '../NewPost/NewPost'
import Sidebar from '../Sidebar/Sidebar'
df99ab71f979de011c8530972b4787f358a99db4

class Nav extends Component {
  render() {
    return (

      <Navbar brand={<Sidebar/>} right
      className="grey darken-2 left-align"
      >
     
      <NavItem >
        
        <Login/>

      </NavItem>

  
    </Navbar>
    );

  }
}
export default Nav

