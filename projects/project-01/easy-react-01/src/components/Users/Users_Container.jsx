import { connect } from "react-redux";
import { follow_AC, setUsers_AC, unfollow_AC, setCurrentPage_AC, setUsersTotalCount_AC} from "../../redux/users-reducer";
import UsersAPI from "./UsersAPI";



let mapStateToProps = (state) => {
	return{
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		usersTotalCount: state.usersPage.usersTotalCount,
		currentPage: state.usersPage.currentPage
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
		setCurrentPage: (pageNum) =>{
			dispatch(setCurrentPage_AC(pageNum));
		},
		setUsersTotalCount:(totalCount)=>{
			dispatch(setUsersTotalCount_AC(totalCount))
		}
	};
};







const Users_Container = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);
export default Users_Container;
