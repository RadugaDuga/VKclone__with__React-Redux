import React from "react";
import s from "./App.module.css";
import HeaderContainer from "./components/Header/HeaderContainer.js";
import Nav from "./components/Navigation/Nav";
import { Route } from "react-router-dom";
import Groups_Container from "./components/Groups/Groups_Container";
import Users_Container from "./components/Users/Users_Container";
import Profile_Container from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { withSuspence } from './components/HOC/withSuspense';
const Dialogs_Container = React.lazy(() =>import("./components/Dialogs/Dialogs_Container"))



class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <div>Aaaoaoaoaoaoa</div>;
		}

		return (
			<div>
				<div className={s.header_line}></div>
				<div className={s.app_wrapper}>
					<HeaderContainer />
					<Nav />
					<div className={s.app_wrapper_content}>
						<Route path="/profile/:userId?" render={() => <Profile_Container />}/>
						<Route
							path="/dialogs"
							render={ withSuspence(Dialogs_Container) }
						/>
						<Route path="/users" render={() => <Users_Container />} />
						<Route path="/groups" render={() => <Groups_Container />} />
						<Route path="/login" render={() => <Login />} />
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});
//Если роуты вдруг не работают после конекта - оберни этот конект визроутером

export default connect(mapStateToProps, { initializeApp })(App);
