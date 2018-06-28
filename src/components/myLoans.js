import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class MyLoans extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1" align="center">
          Mine lån
        </Typography>
        <br />
        <br />
        <Paper className="paper-container">
          <Typography variant="headline" align="center">
            Oversikt
          </Typography>
          <p>Her kan du se hvilke bøker du har lånt</p>
        </Paper>
      </div>
    );
  }
}

export default MyLoans;
