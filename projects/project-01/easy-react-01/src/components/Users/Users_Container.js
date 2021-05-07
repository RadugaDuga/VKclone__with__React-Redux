import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPageNum, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import { usersAPI } from './../../API/api';



class UsersContainer extends React.Component {

	componentDidMount = () => {	
		usersAPI.getUsersData(this.props.currentPageNum, this.props.pageSize).then( data => {
			this.props.setUsers(data.items);
			this.props.setUsersTotalCount(data.totalCount);
		});
		
	}

	onPageChanged = ( currentPageNum ) => {
		this.props.setCurrentPageNum(currentPageNum);
		usersAPI.getUsersData(currentPageNum, this.props.pageSize).then( data => {
			this.props.setUsers(data.items);
		});
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
		setUsers,
		setCurrentPageNum,
		setUsersTotalCount,
		toggleIsFetching,
		toggleFollowingProgress
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