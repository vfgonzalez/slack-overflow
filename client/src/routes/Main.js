import React, { Component } from 'react';
import MenuAppBar from "../components/Nav/Nav";
import Categories from "../components/Categories/Categories";
import Heading from "../components/Jumbotron/Heading";
import Post from "../components/Post/Post";
import Result from "../components/Results/Result";
import Foot from "../components/Footer/Footer";
import API from "../utils/API";
import { Row } from "react-materialize";
import SlackToast from "../components/SlackToastr/slackAlert"
import "./Main.css";




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
    console.log('category', category.name)
    this.getCategory(category.name)
  }

  loadResources = () => {
  }

  // Query database for chosen category, and call category change function with category
  getCategory = category => {
    console.log('querying for: ' + category)
    API.getCategory(category)
      .then(res =>
        this.handleCategoryChange(res.data)
      )
      .catch(err => console.log(err))
  }

  // Empty resources and set to chosen category
  handleCategoryChange = category => {
    this.setState({ resources: [] })
    this.setState({ resources: category})
  }

  // run loadResources after component mounts
  componentDidMount() {

  }

  // Beginning of render function
  render() {
    return (
      <div className="App">

        <MenuAppBar />
        
        <SlackToast/>
        <Post />
        <div className="center-align">
          <h1> </h1>
          <Heading />
          <Categories
            onImageClick={this.handleImageClick}
          />
          {/* HTML for bracket under carousel */}
          <div className="bracket">
            <p>{")}"}</p>
          </div>

          <div className="border row">
            <div className="cat col s12">{this.state.categoryName}</div>
          </div>

          <div className="container results">
            <Row className="collapse">
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

