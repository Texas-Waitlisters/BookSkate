import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './Home/Index';

class Router extends Component {

	render() {
		return(
			<Switch>
				<Route exact path="/index" component={Index} />
				<Route exact path="/" component={Index} />
			</Switch>
		)
	}
}

export default Router;