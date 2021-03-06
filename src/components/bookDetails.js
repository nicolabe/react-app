import React, { Component } from "react";

// Material UI
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Redux
import { connect } from "react-redux";
import { getBook } from "../actions/bookActions";

// Custom
import BookItem from "./bookItem";

class BookDetails extends Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  render() {
    const availabilityStyle = {
      color: "green"
    };

    return (
      <div>
        {this.props.book && (
          <div className="book-detail-grid-container">
            <div>
              <BookItem book={this.props.book} detailed={true} />
            </div>
            <div>
              <Typography variant="subheading" align="center">
                Tilgjengelighet: <span style={availabilityStyle}>Ledig</span>
              </Typography>
              <hr />
              <Button fullWidth color="primary" variant="flat">
                Bestill
              </Button>
              <Button fullWidth variant="flat">
                Bestill hele serien
              </Button>
              <Button fullWidth variant="flat">
                Bestill flere av samme forfatter
              </Button>
              <br />
              <Button fullWidth variant="flat">
                Les e-bok
              </Button>
              <br />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.books.book
});

export default connect(
  mapStateToProps,
  { getBook }
)(BookDetails);
