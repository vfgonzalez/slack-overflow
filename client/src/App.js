import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import logo from "./logo.svg";
import MenuAppBar from "./components/Nav/Nav";
import Categories from "./components/Categories/Categories";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Post from "./components/Post/Post";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <Jumbotron />
        <Categories />
        <Results />
        <Footer />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Post />
        
      </div>
    );
  }
}

export default App;
