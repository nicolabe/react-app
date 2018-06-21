import React, { Component } from 'react';
import Navbar from './components/navbar'
import Content from './components/content'
import CssBaseline from '@material-ui/core/CssBaseline';


import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'


class App extends Component {
  render() {
    return (
    	<MuiThemeProvider theme={theme}>
    		<CssBaseline />
    		<Navbar />
        <Content />
      </MuiThemeProvider>
    );
  }
}

export default App;
