import React, { Component } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";

// React router
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { getLoanedBooks } from "../actions/bookActions";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {},
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  image: {
    width: 170,
    height: "100%"
  },
  titlebar: {
    width: 170
  }
});
class MyLoans extends Component {
  componentDidMount() {
    this.props.getLoanedBooks();
  }

  render() {
    const { classes } = this.props;

    const books = this.props.books.map(book => {
      return (
        <Grow in={true} key={book.id} timeout={700}>
          <GridListTile>
            <Link to={`/books/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                className={classes.image}
              />
              <GridListTileBar
                title={book.title}
                subtitle={<span>av: {book.author}</span>}
                className={classes.titlebar}
              />
            </Link>
          </GridListTile>
        </Grow>
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
          <GridList cols={5} cellHeight={255} className={classes.gridList}>
            {books}
          </GridList>
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
