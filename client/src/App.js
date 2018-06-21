
import React, { Component } from 'react';
//import Routes from './routes'
//import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import logo from "./logo.svg";
import MenuAppBar from "./components/Nav/Nav";
import Categories from "./components/Categories/Categories";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Post from "./components/Post/Post";
import Results from "./components/Results/Results";
import Foot from "./components/Footer/Footer";

import "./App.css";

//routes redirect from gavin:

// export default () => (
//   <Routes />
// )


class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <div className="center-align">
        <h1>Jumbotron Here</h1>
        <Jumbotron />
       
        <h1>Categories Here</h1>
        <Categories />
        <h1>Results Here</h1>
        <Results />
        </div>
        <Foot />
        
        <Post />
        
      </div>
    );
  }
}

export default App;

