import React, { Component } from "react";
import API from '../../utils/API'
import { Input, FormBtn } from "../../components/Form";

class AdminRemoveUser extends Component {

    state = {
        username: "",
        password: "",
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
            <div className="AdminRemoveUser">
                <h1>Remove a User</h1>
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
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Add User
              </FormBtn>
                </form>
            </div >
        );
    }
}

export default AdminRemoveUser