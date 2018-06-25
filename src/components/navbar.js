import React, { Component } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';

// Router
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';

import '../css/navbar.css'

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};


class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    }
  }

  componentWillMount() {
    if(!Object.keys(this.props.user).length) {
      this.props.getUser();
    }
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

	render() {
	 const { classes } = this.props;
   const { anchorEl } = this.state;
   const open = Boolean(anchorEl);

   return(
   	<div className={classes.root}>
     <AppBar position="static">
        <Toolbar>
          <img src="http://www-int.bsint.no/privat/kontor/designhandbok/logo/BS-UgleLilla-01.png" height="42" width="52" alt=''></img>
          <Typography variant="title" color="inherit" className={classes.flex}>
              Bibliotek
          </Typography>
          <Tooltip title="Hjem">
            <IconButton color="inherit">
              <Link to="/" className="menu-links"><Home/></Link>
            </IconButton>
          </Tooltip>
	        <div>
	        	<Typography align="left" variant="subheading" color="inherit">{this.props.user.name}
            <Tooltip title="Meny">
  	          <IconButton
  	            aria-owns={open ? 'menu-appbar' : null}
  	            aria-haspopup="true"
  	            onClick={this.handleMenu}
  	            color="inherit"
  	          >
  	            <AccountCircle />
  	          </IconButton>
            </Tooltip>
	          </Typography>
	          <Menu
	            id="menu-appbar"
	            anchorEl={anchorEl}
	            anchorOrigin={{
	              vertical: 'top',
	              horizontal: 'right',
	            }}
	            transformOrigin={{
	              vertical: 'top',
	              horizontal: 'right',
	            }}
	            open={open}
	            onClose={this.handleClose}
	          >
              <Link to="/my_page" className='menu-links'>
                <MenuItem onClick={this.handleClose}>
                  Min side
                </MenuItem>
              </Link>
              <Link to="/my_loans" className="menu-links">
  	            <MenuItem onClick={this.handleClose}>Mine lån</MenuItem>
              </Link>
	            <Divider />
	            <MenuItem onClick={this.handleClose}>Logg ut</MenuItem>
	          </Menu>
	        </div>
	      </Toolbar>
      </AppBar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return({
    user: state.user.userData
  });
}

export default connect(mapStateToProps, { getUser })(withStyles(styles)(Navbar));
