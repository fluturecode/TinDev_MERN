import React from "react";
import Header from "./components/Header.js";
import TinderCards from "./components/TinderCards.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route path="/chat">
						<h1>I am chatpage</h1>
					</Route>
					<Route path="/">
						<TinderCards />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
