import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import BookItem from "./bookItem.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import SearchField from "./searchField";
import AdvancedSearch from "./advancedSearch";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

import { connect } from "react-redux";
import { getRecommendedBooks } from "../actions/bookActions";

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      advancedSearch: false
    };
  }

  componentWillMount() {
    this.gettingBooks();
  }

  // The following block of code is just to simulate an API request
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async gettingBooks() {
    await this.sleep(1500);
    this.props.getRecommendedBooks();
  }
  // End of simulation

  handleAdvancedSearch = () => {
    this.setState({
      advancedSearch: !this.state.advancedSearch
    });
  };

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
        <Typography variant="display2" align="center">
          Velkommen
        </Typography>
        <SearchField />
        <br />
        <br />
        <Button onClick={this.handleAdvancedSearch}>
          Fler søkemuligheter
          {this.state.advancedSearch ? <ExpandLess /> : <ExpandMore />}
        </Button>
        {this.state.advancedSearch ? <AdvancedSearch /> : <Fragment />}
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
