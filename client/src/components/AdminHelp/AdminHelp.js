import React, { Component } from "react";


class AdminHelp extends Component {

    state = {
        categoryName: '',
        resources: [],
        title: "",
        link: "",
        description: "",
        username: "",
        password: "",
        value: ""
    };

    render() {
        return (
            <div className="AdminHelp">
                <p>This is the admin help page</p>
            </div >
        );
    }
}

export default AdminHelp