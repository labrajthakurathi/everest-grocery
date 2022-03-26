import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Deli from "./components/Deli";
import HomeLoading from "./components/HomeLoading";
const App = () => {
	const [showNews, setShowNews] = useState(true);
	const [showLoader, setShowLoader] = useState(true);
	const logNow = () => {
		setShowLoader(false);
	};
	window.addEventListener("load", logNow);
	return showLoader ? (
		<HomeLoading />
	) : (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/deli' component={Deli} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
