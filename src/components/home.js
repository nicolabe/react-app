import React, { Component } from "react";

// Custom components
import BookList from "./bookList";

// Material UI
import Typography from "@material-ui/core/Typography";
import SearchField from "./searchField";
import AdvancedSearch from "./advancedSearch";
import Button from "@material-ui/core/Button";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      advancedSearch: false
    };
  }

  handleAdvancedSearch = () => {
    this.setState({
      advancedSearch: !this.state.advancedSearch
    });
  };

  render() {
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
        {this.state.advancedSearch && <AdvancedSearch />}
        <BookList />
      </div>
    );
  }
}

export default Home;
