// ---------- This file holds the jsx for the admin page ----------
//  -----------------------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import NewUser from '../components/SignUpForm/SignUpForm'
import AdminHelp from '../components/AdminHelp/AdminHelp'
import AdminRemovePost from '../components/AdminRemovePost/AdminRemovePost';
import AdminAddNewUser from '../components/AdminAddNewUser/AdminAddNewUser'
import API from '../utils/API'
import { Input, FormBtn } from "../components/Form";
import './styles/Admin.css'
import { Route, Redirect } from 'react-router'
import { Button, Tabs, Tab } from 'react-materialize';
import Col from 'react-materialize/lib/Col';
// import Tab from 'react-materialize/lib/Tab';
import AdminShowAllUsers from '../components/AdminShowAllUsers/AdminShowAllUsers'
import AdminAddNewPost from '../components/AdminAddNewPost/AdminAddNewPost'
import AdminRemoveUser from '../components/AdminRemoveUser/AdminRemoveUser'
import NewPost from '../components/NewPost/NewPost'




const drawerWidth = 240;

// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//         height: 1000,
//         zIndex: 1,
//         overflow: 'auto',
//         position: 'relative',
//         display: 'flex',
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//     },
//     drawerPaper: {
//         position: 'relative',
//         width: drawerWidth,
//     },
//     content: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.default,
//         padding: theme.spacing.unit * 3,
//         minWidth: 0, // So the Typography noWrap works
//     },
//     toolbar: theme.mixins.toolbar,
// });
// const classes = {
//     appBar: "Admin-appBar-2",
//     content: "Admin-content-4",
//     drawerPaper: "Admin-drawerPaper-3",
//     root: "Admin-root-1",
//     toolbar: "Admin-toolbar-5"
// }

class Admin extends Component {

    state = {
        categoryName: '',
        resources: [],
        title: "",
        link: "",
        description: "",
        username: "",
        password: "",
        active: 'adminHelp',
        redirect: false
    };

    handleButtonClick = (component) => {
        console.log('Button Clicked')
        console.log(component)
        this.setState({ active: component })
    };

    handleBackButton = () => {
        console.log('Back Button Pressed')
        this.setState({ redirect: true })

    }

    render() {

        var active = this.state.active;

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/main' />
        }

        return (

            <div className="mainContent">
                <AppBar position="absolute" className="appBar">
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>Admin Page</Typography>
                        {/* <button className='backButton' onClick={this.handleBackButton}>Back to Main Page</button> */}

                    </Toolbar>
                    <Col>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("adminHelp")}>
                            Admin Help
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("addNewPost")}>
                            Add Post
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={(() => this.handleButtonClick("removePost"))}>
                            Remove Post
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("addNewUser")}>
                            Add User
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("removeUser")}>
                            Remove User
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={() => this.handleButtonClick("showUsers")}>
                            Show Users
                        </Button>
                        <Button className="transparent white-text z-depth-0" onClick={this.handleBackButton}>
                            Main Page
                        </Button>
                    </Col>
                </AppBar>


                <main className="contentDiv">
                    <div className="toolbar" />
                    <div className='content'>
                        {/* <button type="button" onClick={this.handleTestButton} value="Click Me!" /> */}
                        {(active === 'addNewUser') && <AdminAddNewUser />}
                        {(active === 'adminHelp') && <AdminHelp />}
                        {(active === 'removePost') && <AdminRemovePost />}
                        {(active === 'showUsers') && <AdminShowAllUsers />}
                        {(active === 'addNewPost') && <AdminAddNewPost />}
                        {(active === 'removeUser') && <AdminRemoveUser />}



                    </div>
                </main>
            </div>
        );
    }
}

// Admin.propTypes = {
//     classes: PropTypes.object.isRequired,
// }

export default Admin
