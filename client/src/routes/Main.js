// ---------- This file holds the jsx for the main page ----------

//  -----------------------------------------------------------------------
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import logo from "./logo.svg";
import Nav from "../components/Nav/Nav";
import Categories from "../components/Categories/Categories";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Post from "../components/Post/Post";
import Results from "../components/Results/Results";
import Footer from "../components/Footer/Footer";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Post />
        <Jumbotron />
        <Categories />
        <Results />
        <Footer />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;