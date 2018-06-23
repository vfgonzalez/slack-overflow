
import React, { Component } from 'react';
<<<<<<< HEAD
// import ReactDOM from 'react-dom';
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Post from "./components/Post/Post";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
=======

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
>>>>>>> df99ab71f979de011c8530972b4787f358a99db4


import "./App.css";

const $ = window.$
//routes redirect from gavin:

// export default () => (
//   <Routes />
// )


class App extends Component {

  state = {
    categoryName: '',
    results: [],
  };

  handleImageClick = (category) => {
    console.log('category', category);
    this.setState({ categoryName: category.name });

    // TODO: use category.id to make an api call & get results
    // axios.get('/api/things/' + category.id, (results) => {
    //   console.log('results', results);
    //   this.setState({ results });
    // });
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Nav />
=======

        <MenuAppBar />
      <div className="center-align"
>>>>>>> df99ab71f979de011c8530972b4787f358a99db4
        <Post />
        <Jumbotron />
        <Categories
          onImageClick={this.handleImageClick}
        />
        <div className="border row">
          <div className="category col s12">{this.state.categoryName}</div>
        </div>
        <Results
          results={this.state.results}
        />
<<<<<<< HEAD
        <Footer />
=======
        </div>
        <Foot />
        

>>>>>>> df99ab71f979de011c8530972b4787f358a99db4
      </div>
    );
  }
}

export default App;

