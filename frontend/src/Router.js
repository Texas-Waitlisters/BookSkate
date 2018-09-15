import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './Pages/Index';
import SchoolSearch from './SearchPages/SchoolSearch';
import ClassSearchSelect from './SearchPages/ClassSearchSelect';
import ClassSearch from './SearchPages/ClassSearch';
import ClassDetails from './Pages/ClassDetails';

class Router extends Component {

	render() {
		return(
			<Switch>
				<Route exact path="/index.html" component={Index} />
				<Route exact path="/" component={Index} />
				<Route exact path="/school.html" component={SchoolSearch} />
				<Route exact path="/classSearch/:school" component={ClassSearchSelect} />
				<Route exact path="/classSearch/:school/:SearchTerms" component={ClassSearch} />
				<Route exact path="/class/:classId" component={ClassDetails} />
			</Switch>
		)
	}
}

export default Router;