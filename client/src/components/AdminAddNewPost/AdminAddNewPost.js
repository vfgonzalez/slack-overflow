import React, { Component } from "react";
import API from '../../utils/API'
// import { Input, FormBtn } from "../../components/Form";
import { Modal, Button, Row, Input, Icon, Toast, Dropdown, NavItem } from 'react-materialize'


class AdminAddNewPost extends Component {

    state = {
        link: '',
        title: '',
        description: '',
        category: 'General Tools'
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API method to save the data
    handleFormSubmit = event => {
        event.preventDefault();
        API.saveResource(
            {
                link: this.state.link,
                title: this.state.title,
                description: this.state.description,
                category: this.state.category
            }
        )
            .then(res => console.log(res.data))

            // .then(res => console.log(instance.close()))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="AdminAddNewPost">
                <h1>Add a New Post</h1>
                <form>
                    <Input
                        value={this.state.link}
                        onChange={this.handleInputChange}
                        name="link"
                        placeholder="Link (required)"
                        type="text"
                    />
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                        type="text"
                    />
                    <Input
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        name="category"
                        placeholder="Category (required)"
                        type="text"
                    />
                    <Input
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        name="description"
                        placeholder="Description"
                        type="textarea"
                    />
                    {/* <FormBtn
                        disabled={!(this.state.username && this.state.password && this.state.category)}
                        onClick={this.handleFormSubmit}
                    >
                        Add User
              </FormBtn> */}
              <Button
                onClick={this.notify}
                disabled={!(this.state.link && this.state.title && this.state.category)}
                className="green modal-close"
                >
                Submit
                </Button>

                </form>
            </div >
        );
    }
}

export default AdminAddNewPost

        