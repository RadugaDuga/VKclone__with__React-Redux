import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPageNum, setUsersTotalCount, toggleIsFetching} from "../../redux/users-reducer";
import UsersAPI from "./UsersAPI.jsx";



let mapStateToProps = (state) => {
	return{
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		usersTotalCount: state.usersPage.usersTotalCount,
		currentPageNum: state.usersPage.currentPageNum,
		isFetching:state.usersPage.isFetching
	}
};


const Users_Container = connect(mapStateToProps, 
	{
		follow,
		unfollow,
		setUsers,
		setCurrentPageNum,
		setUsersTotalCount,
		toggleIsFetching
	}
)(UsersAPI);
export default Users_Container;





	



















// ==========Так работает диспатч ту пропс внутри коннекта=========


// let mapDispatchToProps = (dispatch) => {

	// 	return {
	// 		unfollow: (userID) => {
	// 			dispatch(unfollow_AC(userID));
	// 		},
	// 		setUsers: (users) => {
	// 			dispatch(setUsers_AC(users));
	// 		},
	// 		setCurrentPageNum: (pageNum) =>{
	// 			dispatch(setCurrentPageNum_AC(pageNum));
	// 		},
	// 		setUsersTotalCount:(totalCount)=>{
	// 			dispatch(setUsersTotalCount_AC(totalCount))
	// 		},
	// 		toggleIsFetching:(isFetching)=>{
	// 			dispatch(toggleIsFetching_AC(isFetching))
	// 		}
	// 	};

//	};

	
// ================================================================