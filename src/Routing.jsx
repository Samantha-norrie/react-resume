import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router';
import {Landing} from "./Landing";
import {ErrorPage} from "./ErrorPage";

function Routing() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route>
					<ErrorPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routing;
