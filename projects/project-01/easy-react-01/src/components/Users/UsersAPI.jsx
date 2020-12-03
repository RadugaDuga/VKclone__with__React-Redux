import axios from "axios";
import React from "react";
import Users from "./Users";


class UsersAPI extends React.Component {

	componentDidMount =()=> {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			 .then( response => {
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount)
			 });
	}

	onPageChanged = ( pageNumber ) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			 .then( response => {
				this.props.setUsers(response.data.items);
			 });
	}

	render(){
		return <Users usersTotalCount={this.props.usersTotalCount} pageSize={this.props.pageSize} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} users ={this.props.users} unfollow={this.props.unfollow} follow = {this.props.follow}
		/>
	}
};

export default UsersAPI;
