
import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Login from '../Login/Login'
// import NewPost from '../NewPost/NewPost'
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom';
import Button from 'react-materialize/lib/Button';
// import API from '../utils/API'
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

