import { connect } from "react-redux";
import { follow, unfollow, setCurrentPageNum, toggleFollowingProgress, getUsers, followSuccess, unfollowSuccess} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";




class UsersContainer extends React.Component {

	// getUsers - это Thunk 
	componentDidMount = () => {	
		this.props.getUsers(this.props.currentPageNum, this.props.pageSize)
	}

	onPageChanged = ( currentPageNum ) => {
		this.props.setCurrentPageNum(currentPageNum)
		this.props.getUsers(currentPageNum, this.props.pageSize)
	};

	render() {
		{document.title = `Друзья ${this.props.usersTotalCount}`}
		return <Users {...this.props} onPageChanged ={this.onPageChanged}/>
	}

}

let mapStateToProps = (state) => {
	return{
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		usersTotalCount: state.usersPage.usersTotalCount,
		currentPageNum: state.usersPage.currentPageNum,
		isFetching:state.usersPage.isFetching,
		followingProgress: state.usersPage.followingProgress
	}
};

export default connect(mapStateToProps, 
	{
		follow,
		unfollow,
		followSuccess,
		unfollowSuccess,
		setCurrentPageNum,
		getUsers
	}
)(UsersContainer);






	



















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