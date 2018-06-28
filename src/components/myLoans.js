import React, { Component } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";

// Redux
import { connect } from "react-redux";
import { getLoanedBooks } from "../actions/bookActions";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class MyLoans extends Component {
  componentWillMount() {
    this.props.getLoanedBooks();
  }

  render() {
    const { classes } = this.props;

    const books = this.props.books.map(book => {
      return (
        <ExpansionPanel key={book.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{book.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{book.description}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });

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
          <Typography variant="caption" align="center">
            Her kan du se hvilke bøker du har lånt
          </Typography>
          <br />
          {books}
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.loaned
  };
}

export default connect(
  mapStateToProps,
  { getLoanedBooks }
)(withStyles(styles)(MyLoans));
