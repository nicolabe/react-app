import React, { Component, Fragment } from 'react';
import Navbar from './components/navbar'
import Content from './components/content'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'


class App extends Component {
  render() {
    return (
    	<MuiThemeProvider theme={theme}>
    		<CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
          		<Navbar user={this.props.user} />
              <Content />
            </Fragment>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
