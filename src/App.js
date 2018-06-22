import React, { Component, Fragment } from 'react';
import Navbar from './components/navbar'
import Content from './components/content'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'


class App extends Component {
  render() {
    return (
    	<MuiThemeProvider theme={theme}>
    		<CssBaseline />
        <BrowserRouter>
          <Fragment>
        		<Navbar />
            <Content />
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
