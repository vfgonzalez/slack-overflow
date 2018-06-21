
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

// Test for api routes using book DB

  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "test", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  logBooks = (data) => {
    console.log(data)
  }

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

