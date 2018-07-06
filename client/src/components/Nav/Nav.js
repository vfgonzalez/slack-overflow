
import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Login from '../Login/Login'
import Sidebar from '../Sidebar/Sidebar'
import "./Nav.css";


class Nav extends Component {
  render() {
    return (
      <Navbar brand={<Sidebar />} right
      className=" z-depth-0 left-align mainNav"
      >

      <NavItem >
        <Login/>
      </NavItem>

    </Navbar>
    );
  }
}
export default Nav

