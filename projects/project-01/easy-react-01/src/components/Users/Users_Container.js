import { connect } from "react-redux";
import { follow, unfollow, setCurrentPageNum, requestUsers, followSuccess, unfollowSuccess} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import { compose } from "redux";
import { getCurrentPageNum, getPageSize, getUsers, getUsersTotalCount, getFollowingProgress } from './../../redux/users-selectors';





class UsersContainer extends React.Component {

	// getUsers - это Thunk 
	componentDidMount = () => {	
		this.props.requestUsers(this.props.currentPageNum, this.props.pageSize)
	}

	onPageChanged = ( currentPageNum ) => {
		this.props.setCurrentPageNum(currentPageNum)
		this.props.requestUsers(currentPageNum, this.props.pageSize)
	};

	render() {
		{document.title = `Друзья ${this.props.usersTotalCount}`}
		return <Users {...this.props} onPageChanged ={this.onPageChanged}/>
	}

}

let mapStateToProps = (state) => {
	return{
		user:getUsers(state),
		pageSize: getPageSize(state),
		usersTotalCount: getUsersTotalCount(state),
		currentPageNum: getCurrentPageNum(state),
		followingProgress: getFollowingProgress(state)
	}
};

export default compose(
	connect(mapStateToProps, {follow,unfollow,followSuccess,unfollowSuccess,setCurrentPageNum,requestUsers}),
)(UsersContainer)








	



















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