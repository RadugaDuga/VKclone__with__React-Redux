import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Auth } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
	
	componentDidMount() {
		this.props.Auth()
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
export default connect(mapStateToProps, { Auth })(HeaderContainer);
