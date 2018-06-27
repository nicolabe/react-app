import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      address: this.props.user.address,
      phone: this.props.user.phone,
      email: this.props.user.email
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.onChange(this.props.user, e.target.name, e.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            label="Navn"
            required
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            label="Adresse"
            required
            name="address"
            value={this.state.address}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            label="Telefonnummer"
            required
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <TextField
            label="E-post"
            required
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
        </FormControl>
        <br />
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(EditUser);
