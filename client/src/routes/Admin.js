
import React, { Component } from 'react';


//import Routes from './routes'
//import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import logo from "./logo.svg";
// import MenuAppBar from "../components/Nav/Nav";
// import Categories from "../components/Categories/Categories";
// import Jumbotron from "../components/Jumbotron/Jumbotron";
// import Post from "../components/Post/Post";
// import Results from "../components/Results/Results";
// import ResultsList from "./components/Results/ResultsList";
// import Foot from "../components/Footer/Footer";
import API from "../utils/API";
// import CategoryTitle from './components/Categories/CategoryTitle'
import SignUpForm from '../components/SignUpForm/SignUpForm'

class Admin extends Component {

    state = {
        categoryName: '',
        results: [],
        resources: [],
        title: "",
        link: "",
        description: "",
        users: []
    };

    // loadResources = () => {
    //     API.getResources()
    //         .then(res => {
    //             this.setState({ resources: res.data })
    //             console.log("loading resources...");
    //             console.log(this.state.resources);
    //         }
    //         )
    //         .catch(err => console.log(err));
    // };

    loadUsers = () => {
        API.getUsers()
            .then(res => {
                this.setState({ users: res.data })
                console.log("loading users...");
                console.log(this.state.users);
            }
            )
            .catch(err => console.log(err));
    };

    // run loadResources after component mounts
    componentDidMount() {

    }

    // Test Button
    handleTestButton = () => {
        // this.loadResources()
        this.loadUsers()
        console.log('button pressed')
        console.log(this.state)

    }

    // Beginning of render function
    render() {
        return (
            <div><p>Admin Page</p>
                {/* <button type="button" onClick={this.handleTestButton} value="Click Me!" /> */}
                <SignUpForm/>

            </div>





        );
    }
}

export default Admin;

