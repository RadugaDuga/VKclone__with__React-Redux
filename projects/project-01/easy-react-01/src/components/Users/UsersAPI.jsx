import axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Users from './Users';



class UsersAPI extends React.Component {

	componentDidMount =()=> {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNum}&count=${this.props.pageSize}`)
			 .then( response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount)
			 });
	}

	onPageChanged = ( pageNum ) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPageNum(pageNum);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
			 .then( response => {
				this.props.toggleIsFetching(false  );
				this.props.setUsers(response.data.items);
			 });
	}

	render(){
		return (
			<div style={{position:'relative'}}>
				{this.props.isFetching ? <Preloader/> : null}  
				<Users
					usersTotalCount={this.props.usersTotalCount}
					pageSize={this.props.pageSize}
					onPageChanged={this.onPageChanged}
					currentPageNum={this.props.currentPageNum}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
				/>
			</div>
		);
	}
};

export default UsersAPI;
