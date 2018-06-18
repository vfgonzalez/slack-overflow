import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Login from '../Login/Login'
import NewPost from '../NewPost/NewPost'

class Nav extends Component {
  render() {
    return (
      <Navbar brand='Slack Overflow' right
      className="grey darken-2"
      >
      {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem> */}
      <NavItem>
        <NewPost/>
        </NavItem>
      <NavItem >
        
        <Login/>
      </NavItem>

      
    </Navbar>
    );
  }
}
export default Nav