import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Play from './components/Play';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/play" exact component={Play} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
