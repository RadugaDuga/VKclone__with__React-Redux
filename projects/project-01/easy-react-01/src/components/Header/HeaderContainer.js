import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, getMe } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
	
	componentDidMount() {
		this.props.getMe()
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	email: state.auth.email,
	id: state.auth.id,
	photo: state.auth.photo
});
export default connect(mapStateToProps, { setAuthUserData , getMe })(HeaderContainer);
