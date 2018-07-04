import React, { Component } from "react";
import API from '../../utils/API'
import { Input, FormBtn } from "../../components/Form";
import { Col, Row } from "react-materialize";
import UserResult from "../UserResult/UserResult"
import "./AdminShowAllUsers.css"


class AdminShowAllUsers extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.loadUsers();

    }

    loadUsers = () => {
        console.log("Loading All Users")
        API.getUsers()
            .then(res =>
                this.setState({ users: res.data })
                // this.setState({ books: res.data, title: "", author: "", synopsis: "" })

            )
            .catch(err => console.log(err));
    };

    handleTestButton = () => {
        console.log(this.state)
    }

    handleFindUsers = () => {
        console.log("Handling Find Users Button Click")
    }



    render() {
        return (
            <div className="container">
                <h1>Show All Users</h1>
                <button onClick={this.handleTestButton}>TEST</button>
                <button onClick={this.handleFindUsers}>Find Users</button>
                {this.state.users.map(user => {
                    return (
                        <UserResult defaultActiveKey={2}>

                            {user}

                        </UserResult>

                    )

                })}

            </div >
        );
    }
}

export default AdminShowAllUsers