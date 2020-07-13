import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import './Animate.css';

import Header from './components/Header';
import Home from './components/Home';
import Play from './components/Play';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<div className="body-content">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/play" exact component={Play} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
