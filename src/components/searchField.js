import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchField extends Component {

	render() {
   	return(
  		<TextField
  			id="search"
  			fullWidth
  			label="Søk etter bok (tittel, forfatter e.l.)"
  			type="search"
      />
    )
  }
}

export default SearchField;
