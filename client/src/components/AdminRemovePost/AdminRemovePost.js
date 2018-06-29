import React, { Component } from "react";
import { Input, FormBtn } from "../Form"


class AdminRemovePost extends Component {

    state = {
        postTitle: '',
        postId: '',
        postAuthor: ''
    };

    render() {
        return (
            <div className="AdminHelp">
                <form>
                    <label>This is the label</label>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Name (required)"
                    />
                    {/* <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    /> */}
                    <FormBtn
                        // disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                    >
                        Remove Post
                    </FormBtn>
                </form>
            </div >
        );
    }
}

export default AdminRemovePost