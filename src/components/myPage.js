import React, { Component } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Edit from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

// Redux
import { connect } from "react-redux";
import { getUser } from "../actions/userActions";
import { updateUser } from "../actions/userActions";

// Custom components
import EditUser from "./editUser";
import ListUser from "./listUser";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    textAlign: "center"
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  },
  form: {
    margin: 20
  }
});

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      editUser: false
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  editUser = () => {
    this.setState({ editUser: true });
  };

  cancelEdit = () => {
    this.setState({ editUser: false });
  };

  updateUser = e => {
    e.preventDefault();
    this.props.updateUser(this.state.user);
    this.cancelEdit();
  };

  onChange(user, name, value) {
    user[name] = value;
    this.setState({
      user: user
    });
  }

  render() {
    const paperStyle = {
      padding: 30
    };
    const buttonStyle = {
      margin: 5
    };

    const { classes } = this.props;

    return (
      <div>
        <Typography variant="display1" align="center">
          Min side
        </Typography>
        <br />
        <br />
        <Paper style={paperStyle}>
          <div className={classes.demo}>
            {this.state.editUser ? (
              <div>
                <Typography variant="headline" align="center">
                  Oppdater opplysninger
                </Typography>
                <form className={classes.form}>
                  <EditUser
                    onChange={this.onChange.bind(this)}
                    user={this.props.user}
                  />
                  <Button
                    style={buttonStyle}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.updateUser}
                  >
                    Lagre
                  </Button>
                  <Button
                    style={buttonStyle}
                    variant="contained"
                    onClick={this.cancelEdit}
                  >
                    Avbryt
                  </Button>
                </form>
              </div>
            ) : (
              <div>
                <Typography variant="headline" align="center">
                  Låneropplysninger
                </Typography>
                <ListUser user={this.props.user} />
                <div>
                  <Tooltip title="Endre">
                    <Button
                      variant="fab"
                      color="primary"
                      aria-label="edit"
                      className={classes.button}
                      onClick={this.editUser}
                    >
                      <Edit />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            )}
          </div>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.userData
  };
}

export default connect(
  mapStateToProps,
  { getUser, updateUser }
)(withStyles(styles)(MyPage));
