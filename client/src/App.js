import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Post from "./components/Post/Post";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Post />
        <Jumbotron />
        <Categories/>
        <Results />
        <Footer />
      </div>
    );
  }
}

export default App;
