import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import FormComponentSelect from './formComponentSelect';
import Typography from '@material-ui/core/Typography';

class AdvancedSearch extends Component {
  constructor() {
    super();
    this.sorteringer = ['Relevans', 'Popularitet', 'Antall stjerner'];
    this.avdelinger = ['Hovedbiblioteket', 'Larvik', 'eBokBib'];
    this.felt = ['Tittel', 'Forfatter', 'Emne'];
    this.passerFor = ['Barn og ungdom', 'Voksne'];
  }

	render() {
    const paperStyle = {
      margin: 30
    };

    const headerStyle = {
      paddingTop: 30
    }

   	return(
      <Paper style={paperStyle}>
        <form>
          <Typography variant="headline" align="center" style={headerStyle}>Utvidet søk</Typography>
          <div className="search-grid-container">
            <FormComponentSelect items={this.sorteringer} name="Sortering" identifier="sorting"></FormComponentSelect>
            <FormComponentSelect items={this.avdelinger} name="Avdelinger" identifier="departments"></FormComponentSelect>
            <FormComponentSelect items={this.felt} name="Søk i alle felt" identifier="fields"></FormComponentSelect>
            <FormComponentSelect items={this.passerFor} name="Passer for" identifier="suitableFor"></FormComponentSelect>
          </div>
        </form>
      </Paper>
    )
  }
}

export default AdvancedSearch;
