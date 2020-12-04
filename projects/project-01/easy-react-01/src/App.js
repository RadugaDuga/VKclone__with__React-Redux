import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import { Route } from "react-router-dom";
import Dialogs_Container from "./components/Dialogs/Dialogs_Container";
import Groups_Container from "./components/Groups/Groups_Container";
import Users_Container from "./components/Users/Users_Container";
import Profile_Container from './components/Profile/ProfileContainer';

const App = (props) => {
	return (
		<div>
			<div className={s.header_line}></div>
			<div className={s.app_wrapper}>
				<Header />
				<Nav />
				<div className={s.app_wrapper_content}>
					<Route path="/profile" render={() => <Profile_Container />} />
					<Route path="/dialogs" render={() => <Dialogs_Container />} />
					<Route path="/users"   render={() => <Users_Container />} />
					<Route path="/groups"  render={() => <Groups_Container />} />
				</div>
			</div>
		</div>
	);
};

export default App;
