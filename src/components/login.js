import React, { Component } from "react";

// Styling
import { withStyles } from "@material-ui/core/styles";

// Material UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    flexBasis: 200
  }
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      password: ""
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
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
        <form>
          <TextField
            className={classes.margin}
            id="username"
            label="Brukernavn"
          />
          <br />
          <TextField
            className={classes.margin}
            id="password"
            label="Passord"
            type="password"
          />
          <br />
          <Button variant="contained" color="primary" style={buttonStyle}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
