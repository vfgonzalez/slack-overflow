// ---------- This file holds the jsx for the login page ----------
//  -----------------------------------------------------------------------

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Nav from "../components/Nav/Nav";
import Categories from "../components/Categories/Categories";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Post from "../components/Post/Post";
import Results from "../components/Results/Results";
import Footer from "../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Button variant="contained" color="primary">
          Login
        </Button>
      </div>
    );
  }
}

export default App;