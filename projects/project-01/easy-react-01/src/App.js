import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<section>
				<div className={s.header_line}></div>
				<div className={s.app_wrapper}>
					<Header />
					<Nav />
					<div className={s.app_wrapper_content}>
						<Route path='/Dialogs' component={Dialogs} />
						<Route path='/Profile' component={Profile} />
					</div>
				</div>
			</section>
		</BrowserRouter>
	);
};

export default App;
