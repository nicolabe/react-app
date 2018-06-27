import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  onSubmit = e => {
    alert("Du søkte etter '" + this.state.search + "'");
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const textStyle = {
      width: 1180
    };

    return (
      <form onSubmit={this.onSubmit}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField
              id="search"
              name="search"
              style={textStyle}
              label="Søk etter bok (tittel, forfatter e.l.)"
              type="search"
              value={this.state.search}
              onChange={this.onChange}
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default SearchField;
