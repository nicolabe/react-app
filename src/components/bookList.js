import React, { Component } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import BookItem from "./bookItem.js";
import CircularProgress from "@material-ui/core/CircularProgress";

// Redux
import { connect } from "react-redux";
import { getRecommendedBooks } from "../actions/bookActions";

class BookList extends Component {
  componentDidMount() {
    this.gettingBooks();
  }

  // The following block of code is just to emulate an API request
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async gettingBooks() {
    await this.sleep(1500);
    this.props.getRecommendedBooks();
  }
  // End of emulation

  render() {
    const books = this.props.books.map(book => {
      return <BookItem key={book.id} book={book} />;
    });

    const paperStyle = {
      paddingTop: 30,
      textAlign: "center"
    };

    return (
      <div>
        <Typography variant="display1" align="center">
          Vi anbefaler
        </Typography>
        <br />
        <div style={paperStyle}>
          {this.props.books.length ? (
            <div className="book-grid-container">{books}</div>
          ) : (
            <div>
              <CircularProgress />
              <Typography variant="subheading">Henter bøker</Typography>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.recommended
  };
}

export default connect(
  mapStateToProps,
  { getRecommendedBooks }
)(BookList);
