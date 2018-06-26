
import React, { Component } from 'react';


//import Routes from './routes'
//import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import logo from "./logo.svg";
import MenuAppBar from "./components/Nav/Nav";
import Categories from "./components/Categories/Categories";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Post from "./components/Post/Post";
import Results from "./components/Results/Results";
// import ResultsList from "./components/Results/ResultsList";
import Foot from "./components/Footer/Footer";
import API from "./utils/API";
// import CategoryTitle from './components/Categories/CategoryTitle'



import "./App.css";

// const $ = window.$
//routes redirect from gavin:

// export default () => (
//   <Routes />
// )


// handleFormSubmit = event => {
//   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
//   event.preventDefault();
//   API.getResources(this.state.categoryName)
//     .then(res => this.setState({ resources: res.data }))
//     .catch(err => console.log(err));
// };

class App extends Component {

  state = {
    categoryName: '',
    results: [],
    resources: [],
    title: "",
    link: "",
    description: ""
  };

  // componentDidMount() {
  //   this.loadResults();
  // }

  // loadResults = () => {
  //   API.getResults()
  //     .then(res =>
  //       this.setState({ resources: res.data, title: "", link: "", description: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleImageClick = (category) => {
    // event.preventDefault();
    this.setState({ categoryName: category.name })
    console.log('category', category)
    this.loadResources()

    // .then(res => this.loadResults())

    // TODO: use category.id to make an api call & get results
    // axios.get('/api/things/' + category.id, (results) => {
    //   console.log('results', results);
    //   this.setState({ results });
    // });
    // loadResults()



    
  }
  loadResources = (source) => {

    API.getResources(source)
      .then(res =>  {
          this.setState({ resources: res.data })  
          console.log(this.state.resources);
        }
      )
      .catch(err => console.log(err));


  };



  // run loadResources after component mounts
  componentDidMount() {

  }

  // .then(
  //   API.getResource(this.state.categoryName)

  //       )

  // query DB for all resources, and send them to state


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


        {/* <div className="center-align"> */}

        <Post />
        <div className="center-align">
          <h1>Jumbotron Here</h1>
          {/* Button for testing API data on front end */}
          <button type="button" onClick={this.handleTestButton} value="Click Me!" />
          <Jumbotron />
          <Categories
            onImageClick={this.handleImageClick}
          />
          {/* <CategoryTitle/> */}
          <div className="border row">
            <div className="category col s12">{this.state.categoryName}</div>

          </div>
          <Results
            results={this.state.results}
          />

          {/* </div> */}
          {/* //   <Foot /> */}



          {/* //   </div>
      //   <ResultsList>
      //   <div> */}

          {/* //     {this.state.resources.map(resource => { */}
          {/* //       return ( */}
          {/* //         <Results */}
          {/* //         results={this.state.results}
      //         description = {resource.description}
      //         key={resource.title}
      //         title={resource.title}
      //         link={resource.link}
              
      //         />
      //       );
      //     })}
      //     </div>
      //     </ResultsList> */}

        </div>
        <Foot />

      </div>
    );
  }
}

export default App;

