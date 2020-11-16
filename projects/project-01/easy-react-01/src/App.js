import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs_Container from './components/Dialogs/Dialogs_Container';

const App = (props) => {
	return (
		<BrowserRouter>
			<section>
				<div className={s.header_line}></div>
				<div className={s.app_wrapper}>
					<Header />
					<Nav />
					<div className={s.app_wrapper_content}>
						<Route
							path="/Profile"
							render={() => <Profile store={props.store} />}
						/>

						<Route 
							path="/Dialogs" render={() => <Dialogs_Container store={props.store}/>} 
						/>

						<Route
							path="/Groups"
							render={() => (
								<Groups groupsData={props.state.groupsPage.groupsData} />
							)}
						/>
					</div>
				</div>
			</section>
		</BrowserRouter>
	);
};

export default App;
