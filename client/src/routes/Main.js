import React, { Component } from 'react';
import MenuAppBar from "../components/Nav/Nav";
import Categories from "../components/Categories/Categories";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Post from "../components/Post/Post";
import Result from "../components/Results/Result";
import Foot from "../components/Footer/Footer";
import API from "../utils/API";
import { Row } from "react-materialize";

import "../App.css";

class Main extends Component {

  state = {
    categoryName: '',
    results: [],
    resources: [],
    title: "",
    link: "",
    description: ""
  };

  //image click funtion 
  handleImageClick = (category) => {
    this.setState({ categoryName: category.name })
    console.log('category', category)
    this.loadResources()

  }
  
  loadResources = () => {

    API.getResources()
      .then(res => {
        this.setState({ resources: res.data })
        console.log(this.state.resources);
      }
      )
      .catch(err => console.log(err));
  };

  // run loadResources after component mounts
  componentDidMount() {

  }

  // Beginning of render function
  render() {
    return (
      <div className="App">

        <MenuAppBar />
        <Post />
        <div className="center-align">
          <h1>Jumbotron Here</h1>
          <Jumbotron />
          <Categories
            onImageClick={this.handleImageClick}
          />
          <div className="border row">
            <div className="category col s12">{this.state.categoryName}</div>

          </div>
          <div className="container">
            <Row>
              {this.state.resources.map(resource => {
                return (
                  <Result>
                    {/* this is how you pass resource, the data that you queried back to the Results component. Results will then consume it as props.children */}
                    {resource}
                  </Result>
                );
              })}
            </Row>
          </div>

        </div>
        <Foot />

      </div>
    );
  }
}

export default Main;

