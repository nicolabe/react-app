import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

class SearchField extends Component {
  render() {
    const textStyle = {
      width: 1180
    };

    return (
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <TextField
            id="search"
            style={textStyle}
            label="Søk etter bok (tittel, forfatter e.l.)"
            type="search"
          />
        </Grid>
      </Grid>
    );
  }
}

export default SearchField;
