import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import { Route } from "react-router-dom";
import Dialogs_Container from "./components/Dialogs/Dialogs_Container";
import Users from "./components/Users/Users";

const App = (props) => {
	return (
		<section>
			<div className={s.header_line}></div>
			<div className={s.app_wrapper}>
				<Header />
				<Nav />
				<div className={s.app_wrapper_content}>
					<Route path="/profile" render={() => <Profile />} />

					<Route path="/dialogs" render={() => <Dialogs_Container />} />

					<Route path="/users" render={() => <Users />} />

					<Route
						path="/groups"
						render={() => (
							<Groups groupsData={props.state.groupsPage.groupsData} />
						)}
					/>
				</div>
			</div>
		</section>
	);
};

export default App;
