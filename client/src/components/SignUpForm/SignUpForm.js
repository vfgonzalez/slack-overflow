import React, { Component } from "react";
import "./SignUpForm.css";
import API from '../../utils/API'
import { Input, FormBtn } from "../../components/Form";

class SignUpForm extends Component {

    state = {
        categoryName: '',
        results: [],
        resources: [],
        title: "",
        link: "",
        description: "",
        username: "",
        password: "",
        value: ""
    };

    // Test Button
    handleTestButton = () => {
        this.loadUsers()
        console.log('button pressed')
        // console.log(this.state)
    }

    // Load Users
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

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API method to save the data
    // Then reload data from the database
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.username)
        API.saveUser(
            {
                username: this.state.username,
                password: this.state.password,
                accountLevel: 'Admin',
                // cohortname: 'test'
            }
        )
            .then(res => this.loadUsers())
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div className="SignUpForm">
                <button type="button" onClick={this.handleTestButton} value="Click Me!" />

                <form>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Name (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        // disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit Book
              </FormBtn>
                </form>
            </div >
        );
    }
}

export default SignUpForm