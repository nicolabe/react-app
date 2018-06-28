import React, { Component } from "react";

// Styling
import { withStyles } from "@material-ui/core/styles";

// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Redux
import { connect } from "react-redux";
import { login } from "../actions/loginActions";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    flexBasis: 200
  }
});

class Login extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login();
    this.props.history.location.pathname = "/";
  };

  render() {
    const { classes } = this.props;

    const buttonStyle = {
      margin: 15
    };

    const divStyle = {
      textAlign: "center"
    };

    return (
      <div style={divStyle}>
        <Typography variant="display1" align="center">
          Logg inn
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className={classes.margin}
            id="username"
            name="username"
            label="Brukernavn"
            autoFocus={true}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            className={classes.margin}
            id="password"
            name="password"
            label="Passord"
            type="password"
            onChange={this.handleChange}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={buttonStyle}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(withStyles(styles)(Login));
