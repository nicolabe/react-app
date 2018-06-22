import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ListUser extends Component {
  render() {
    return(
      <List>
        <ListItem>
          <ListItemText
            primary={this.props.user.name}
            secondary="Navn"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={this.props.user.address}
            secondary="Adresse"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={this.props.user.phone}
            secondary="Telefonnummer"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={this.props.user.email}
            secondary="E-post"
          />
        </ListItem>
      </List>
    )
  }
}

export default ListUser;