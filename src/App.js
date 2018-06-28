import React, { Component, Fragment } from "react";
import Navbar from "./components/navbar";
import Content from "./components/content";
import { BrowserRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Material UI
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Fragment>
            <Navbar user={this.props.user} loggedIn={this.props.loggedIn} />
            <Content loggedIn={this.props.loggedIn} />
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  };
};

export default connect(mapStateToProps)(App);
