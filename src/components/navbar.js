import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Navbar extends Component {
	state = {
    anchorEl: null,
  };

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

	        <div>
	        	<Typography align="left" variant="subheading" color="inherit">Nicolai
	          <IconButton
	            aria-owns={open ? 'menu-appbar' : null}
	            aria-haspopup="true"
	            onClick={this.handleMenu}
	            color="inherit"
	          >
	            <AccountCircle />
	          </IconButton>
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
	            <MenuItem onClick={this.handleClose}>Min side</MenuItem>
	            <MenuItem onClick={this.handleClose}>Mine lån</MenuItem>
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

export default withStyles(styles)(Navbar);
