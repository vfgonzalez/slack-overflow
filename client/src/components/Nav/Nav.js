
import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Login from '../Login/Login'
import Sidebar from '../Sidebar/Sidebar'
import "./Nav.css";


// Nav Component render navbar with sideloaded bar that includes summary of developers, inspiration, and contact detail.
// Login componenent passed through renders the modal for Admin login.
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

