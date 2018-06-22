import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchField from './searchField'
import AdvancedSearch from './advancedSearch'
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Routes from '../routes'
import '../css/grid.css'

class Content extends Component {
	constructor() {
		super();
		this.state = {
			advancedSearch: false
		}
		this.handleAdvancedSearch = this.handleAdvancedSearch.bind(this);
	}

	handleAdvancedSearch() {
		this.setState({
			advancedSearch: !this.state.advancedSearch
		})
	}

  render() {
    return(
    	<div className="grid-container">
    		<div className="sidebar-left"></div>
    		<div className="middle-container">
					<Typography variant="display2" align="center">Velkommen</Typography>
				  <SearchField />
				  <br/>
				  <br/>
				  <Button onClick={this.handleAdvancedSearch}>
				  	Fler søkemuligheter
				  	{
				  		this.state.advancedSearch?
					  		<ExpandLess />
				  		:
					  		<ExpandMore />
				  	}
				  </Button>
				  {
		      	this.state.advancedSearch?
			      	<AdvancedSearch />
		      	:
			      	<Fragment />
		      }
          <div>
            <Routes />
          </div>
			  </div>
				<div className="sidebar-right"></div>
    	</div>
    )
  }
}

export default Content;