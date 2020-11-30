import { connect } from "react-redux";
import { follow_AC, setUsers_AC, unfollow_AC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
	return{
		users: state.usersPage.users
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		
		follow: (userID) => {
			dispatch(follow_AC(userID));
		},

		unfollow: (userID) => {
			dispatch(unfollow_AC(userID));
		},

		setUsers: (users) => {
			dispatch(setUsers_AC(users));
		},
	};
};







const Users_Container = connect(mapStateToProps,mapDispatchToProps)(Users);
export default Users_Container;
