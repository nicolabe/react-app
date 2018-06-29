import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import FormComponentSelect from "./formComponentSelect";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";

class AdvancedSearch extends Component {
  constructor() {
    super();
    this.sorteringer = ["Relevans", "Popularitet", "Antall stjerner"];
    this.avdelinger = ["Hovedbiblioteket", "Larvik", "eBokBib"];
    this.felt = ["Tittel", "Forfatter", "Emne"];
    this.passerFor = ["Barn og ungdom", "Voksne"];
  }

  render() {
    const paperStyle = {
      margin: 30
    };

    const headerStyle = {
      paddingTop: 30
    };

    const buttonDivStyle = {
      textAlign: "center",
      padding: 20
    };

    return (
      <Slide in={true} direction="left">
        <Paper style={paperStyle}>
          <form>
            <Typography variant="display1" align="center" style={headerStyle}>
              Utvidet søk
            </Typography>
            <div className="search-grid-container">
              <FormComponentSelect
                items={this.sorteringer}
                name="Sortering"
                identifier="sorting"
              />
              <FormComponentSelect
                items={this.avdelinger}
                name="Avdelinger"
                identifier="departments"
              />
              <FormComponentSelect
                items={this.felt}
                name="Søk i alle felt"
                identifier="fields"
              />
              <FormComponentSelect
                items={this.passerFor}
                name="Passer for"
                identifier="suitableFor"
              />
            </div>
            <div style={buttonDivStyle}>
              <Button type="submit" color="primary" variant="contained">
                Søk nå
              </Button>
            </div>
          </form>
        </Paper>
      </Slide>
    );
  }
}

export default AdvancedSearch;
