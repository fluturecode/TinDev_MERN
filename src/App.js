import React from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
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
						<h1>I am hompage</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
