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
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PageIcon from '@material-ui/icons/Description';
import FaceIcon from '@material-ui/icons/Face';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import EjectIcon from '@material-ui/icons/Eject';
import GroupIcon from '@material-ui/icons/Group';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ReorderIcon from '@material-ui/icons/Reorder';
import NewUser from '../components/SignUpForm/SignUpForm'
import AdminHelp from '../components/AdminHelp/AdminHelp'
import AdminRemovePost from '../components/AdminRemovePost/AdminRemovePost';
import API from '../utils/API'
import { Input, FormBtn } from "../components/Form";
import './styles/Admin.css'
import { Route, Redirect } from 'react-router'
import AdminShowAllUsers from '../components/AdminShowAllUsers/AdminShowAllUsers'
import AdminAddNewPost from '../components/AdminAddNewPost/AdminAddNewPost'
import AdminRemoveUser from '../components/AdminRemoveUser/AdminRemoveUser'
import NewPost from '../components/NewPost/NewPost'




const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 1000,
        zIndex: 1,
        overflow: 'auto',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});
const classes = {
    appBar: "Admin-appBar-2",
    content: "Admin-content-4",
    drawerPaper: "Admin-drawerPaper-3",
    root: "Admin-root-1",
    toolbar: "Admin-toolbar-5"
}

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

    // Test Button
    handleTestButton = () => {
        this.loadUsers()
        console.log('button pressed')
        console.log(this.state)
    }

    loadUsers = () => {
        API.getUsers()
            .then(res => {
                this.setState({ users: res.data })
                console.log(this.state.users);
            }
            )
            .catch(err => console.log(err));
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

            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>Admin Page</Typography>
                        {/* <button className='backButton' onClick={this.handleBackButton}>Back to Main Page</button> */}
                    </Toolbar>
                </AppBar>
                {/* <Nav position="absolute"/> */}
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />

                    {/* Buttons For Admin Toolbar Navigation */}
                    <List component="a">
                        <ListItem button onClick={() => this.handleButtonClick("adminHelp")}>
                            <ListItemIcon><FaceIcon /></ListItemIcon>
                            <ListItemText primary="Admin Help" />
                        </ListItem>
                    </List>
                    <Divider />
                    {/* <List component="a">
                        <ListItem button>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Messages" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><ReportProblemIcon /></ListItemIcon>
                            <ListItemText primary="Flagged Posts" />
                        </ListItem>
                    </List>
                    <Divider /> */}
                    <List component="a">
                        <ListItem button onClick={(() => this.handleButtonClick("addNewPost"))}>
                            <ListItemIcon><AddIcon /></ListItemIcon>
                            <ListItemText primary="Add Post" />
                        </ListItem>
                        <ListItem button onClick={(() => this.handleButtonClick("removePost"))}>
                            <ListItemIcon><RemoveIcon /></ListItemIcon>
                            <ListItemText primary="Remove Post" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="a">
                        <ListItem button onClick={() => this.handleButtonClick("addNewUser")}>
                            <ListItemIcon><PermIdentityIcon /></ListItemIcon>
                            <ListItemText primary="Add New User" />
                        </ListItem>
                        <ListItem button onClick={() => this.handleButtonClick("removeUser")}>
                            <ListItemIcon><EjectIcon /></ListItemIcon>
                            <ListItemText primary="Remove User" />
                        </ListItem>
                        <ListItem button onClick={() => this.handleButtonClick("showUsers")}>
                            <ListItemIcon><GroupIcon /></ListItemIcon>
                            <ListItemText primary="Show Users" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="a">
                        <ListItem button disabled>
                            <ListItemIcon><ReorderIcon /></ListItemIcon>
                            <ListItemText primary="Add Category" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="a">
                        <ListItem button onClick={this.handleBackButton}>
                            <ListItemIcon><PageIcon /></ListItemIcon>
                            <ListItemText primary="Back to Main Page" />
                        </ListItem>
                    </List>

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <div className='content'>
                        {/* <button type="button" onClick={this.handleTestButton} value="Click Me!" /> */}
                        {(active === 'addNewUser') && <NewUser />}
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

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Admin)
