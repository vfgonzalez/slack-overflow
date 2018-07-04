import React, { Component } from "react";
import API from '../../utils/API'
import { Modal, Button, Row, Input, Icon, Toast, Dropdown, NavItem } from 'react-materialize'
import Suggestor from 'ssuggestor'
import "./AdminAddNewPost.css"



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
        console.log("Submitting Resource from Admin Page")
        console.log(this.state)
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

        const catArray = [
            "General Tools",
            "Teaching Resource",
            "CSS",
            "Testing",
            "Javascript",
            "API",
            "Databases",
            "NPM Packages",
            "Templates",
            "Common Issues",
            "Job Resources",
            "HTML",
            "Random",
            "Podcasts",
            "Slack Submissions",
            "Text Submissions"
          ]

        return (
            <div className="container">
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
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        name="description"
                        placeholder="Description"
                        type="textarea"
                    />
                    <Suggestor
                        label="LABEL"
                        list={catArray}
                        // theme={b3Theme}
                        onChange={value => { }}
                        onSelect={(value, suggestion) => { this.setState({ category: suggestion }) }}
                        placeholder="Choose a Category"
                    />

                    <Button
                        onClick={this.handleFormSubmit}
                        disabled={!(this.state.link && this.state.title && this.state.category)}
                        className="green modal-close"
                    >
                        Add Post
                </Button>

                </form>
            </div >
        );
    }
}

export default AdminAddNewPost

