
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             Title
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonAppBar);

import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import Login from '../Login/Login'
// import NewPost from '../NewPost/NewPost'
import Sidebar from '../Sidebar/Sidebar'

class Nav extends Component {
  render() {
    return (
      <Navbar brand={<Sidebar/>} right
      className="grey darken-2 left-align"
      >
     
      <NavItem >
        
        <Login/>
      </NavItem>

      
    </Navbar>
    );
  }
}
export default Nav

