import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

import EditUser from './editUser';
import ListUser from './listUser';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    textAlign: 'center'
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
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
    this.editUser = this.editUser.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  componentWillMount() {
    this.setState({
      user: {
        name: "Nicolai Berthelsen",
        address: "Støperiveien 4, 3267 Larvik",
        email: "berthelsen.nicolai@gmail.com",
        phone: "+47 40469957"
      }
    })
  };

  editUser() {
    this.setState({editUser: true});
  }

  cancelEdit() {
    this.setState({editUser: false});
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
        <Typography variant="display1" align="center">Min side</Typography>
        <br/>
        <br/>
        <Paper style={paperStyle}>
          <div className={classes.demo}>
            {
              this.state.editUser?
                <div>
                  <Typography variant="headline" align="center">Oppdater opplysninger</Typography>
                  <form className={classes.form}>
                    <EditUser user={this.state.user}/>
                    <Button style={buttonStyle} variant="contained" color="primary">Lagre</Button>
                    <Button style={buttonStyle} variant="contained" onClick={this.cancelEdit}>Avbryt</Button>
                  </form>
                </div>
              :
                <div>
                  <Typography variant="headline" align="center">Låneropplysninger</Typography>
                  <ListUser user={this.state.user}/>
                  <div>
                    <Tooltip title="Endre">
                      <Button variant="fab" color="primary" aria-label="edit" className={classes.button} onClick={this.editUser}>
                        <Edit/>
                      </Button>
                    </Tooltip>
                  </div>
                </div>
            }
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MyPage);
