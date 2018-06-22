import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
  }
});


class EditUser extends Component {
  render() {
    const { classes } = this.props;

    return(
      <div className={classes.container}>
        <FormControl fullWidth className={classes.formControl}>
            <TextField
              label="Navn"
              required
              defaultValue={this.props.user.name}
            />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            label="Adresse"
            required
            defaultValue={this.props.user.address}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            label="Telefonnummer"
            required
            defaultValue={this.props.user.phone}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            label="E-post"
            required
            defaultValue={this.props.user.email}
          />
        </FormControl>
        <br/>
        <br/>
      </div>
    )
  }
}

export default withStyles(styles)(EditUser);