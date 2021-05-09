import React from "react";
import s from "./App.module.css";
import HeaderContainer from "./components/Header/HeaderContainer.js";
import Nav from "./components/Navigation/Nav";
import { Route } from "react-router-dom";
import Dialogs_Container from "./components/Dialogs/Dialogs_Container";
import Groups_Container from "./components/Groups/Groups_Container";
import Users_Container from "./components/Users/Users_Container";
import Profile_Container from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';



const App = (props) => {
	return (
		<div>
			<div className={s.header_line}></div>
			<div className={s.app_wrapper}>
				<HeaderContainer/>
				<Nav />
				<div className={s.app_wrapper_content}>
					<Route path="/profile/:userId?" render={() => <Profile_Container />} />
					<Route path="/dialogs" render={() => <Dialogs_Container />} />
					<Route path="/users"   render={() => <Users_Container />} />
					<Route path="/groups"  render={() => <Groups_Container />} />
					<Route path="/login" render={() => <Login/>} />
				</div>
			</div>
		</div>
	);
};

export default App;
