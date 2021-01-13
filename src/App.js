import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavHero from './NavHero';
import Contact from './Contact';
import Nav from './Nav';
import Products from './Products';
import About from './About';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<NavHero />
					<Home />
				</Route>

				<Route path="/about">
					<Nav />
					<About />
				</Route>

				<Route path="/contact">
					<Contact />
				</Route>

				<Route path="/products">
					<Nav />
					<Products />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
