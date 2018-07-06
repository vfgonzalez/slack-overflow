import React, { Component } from "react";
import API from '../../utils/API'
import { Input, FormBtn } from "../../components/Form";
import "./AdminRemoveUser.css"

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
        // console.log(this.state.username)
        // API.saveUser(
        //     {
        //         username: this.state.username,
        //         password: this.state.password,
        //         accountLevel: 'Admin',
        //         // cohortname: 'test'
        //     }
        // )
        //     .then(res => this.loadUsers())
        //     .catch(err => console.log(err));
        this.removeUser(this.state.username)

    };

    removeUser = username => {
        API.removeUser(username)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div className="container">
                <h1>Remove a User</h1>
                <form>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Name (required)"
                    />
                    <FormBtn
                        disabled={!(this.state.username)}
                        onClick={this.handleFormSubmit}
                    >
                        Remove User
              </FormBtn>
                </form>
            </div >
        );
    }
}

export default AdminRemoveUser