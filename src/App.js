import React from "react";
import s from "./App.module.css";

import HeaderContainer from "./components/Header/HeaderContainer.js";
import GroupsContainer from "./components/Groups/GroupsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import Nav from "./components/Navigation/Nav";
import Preloader from "./components/common/Preloader/Preloader";

import { Route, Switch } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { withSuspence } from "./components/HOC/withSuspense";
import { Redirect } from 'react-router';
import NF404 from "./components/404NotFound/NF404";


const DialogsContainer = React.lazy(() =>
	import("./components/Dialogs/DialogsContainer")
)



class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div>
				<div className={s.header_line}></div>
				<div className={s.app_wrapper}>
					<HeaderContainer />
					<Nav />
					<div className={s.app_wrapper_content}>
						<Switch>
							<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
							<Route path="/dialogs" render={withSuspence(DialogsContainer)} />
							<Route path="/users"   render={() => <UsersContainer />} />
							<Route path="/groups"  render={() => <GroupsContainer />} />
							<Route path="/login"   render={() => <Login />} />
							<Route exact path="/" render={() => <Redirect to ={"/profile"} />} />
							<Route path="*"   render={() => <NF404/>} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});
//Если роуты вдруг не работают после конекта - оберни этот конект визроутером

export default connect(mapStateToProps, { initializeApp })(App);
