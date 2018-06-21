import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class FormComponentSelect extends Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    };
  };

  handleChange = e => {
    this.setState({selected: e.target.value})
  };

	render() {
    const { classes } = this.props;

    const options = this.props.items.map(item => {
      return (
        <MenuItem key={item} value={item}>{item}</MenuItem>
      );
    });

   	return(
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={this.props.identifier}>{this.props.name}</InputLabel>
        <Select
          value={this.state.selected}
          inputProps={{
            name: this.props.identifier,
            id: this.props.identifier
          }}
          onChange={this.handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            {this.props.name}
          </MenuItem>
          {options}
        </Select>
      </FormControl>
    )
  }
}

export default withStyles(styles)(FormComponentSelect);
