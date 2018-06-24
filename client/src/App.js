
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
import API from "./utils/API";


import "./App.css";

//routes redirect from gavin:

// export default () => (
//   <Routes />
// )


class App extends Component {

  // Setting our component's initial state
  state = {
    resources: []
  };

  // run loadResources after component mounts
  componentDidMount() {
    this.loadResources();
  }

  // query DB for all resources, and send them to state
  loadResources = () => {
    API.getResources()
      .then(res =>
        this.setState({ resources: res.data })
      )
      .catch(err => console.log(err));
  };

  // Test Button
  handleTestButton = () => {
    console.log('button pressed')
    console.log(this.state)
  }

// Beginning of render function
  render() {
    return (
      // {this.state.books.map(book => {})}
      <div className="App">
        <MenuAppBar />
        <div className="center-align">
        <h1>Jumbotron Here</h1>
        {/* Button for testing API data on front end */}
        <input type="button" onClick={this.handleTestButton} value="Click Me!" />
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

