import axios from "axios";
import React from "react";
import Users from "./Users";
import "axios-progress-bar/dist/nprogress.css";
import { loadProgressBar } from "axios-progress-bar";


loadProgressBar();

class UsersAPI extends React.Component {
	componentDidMount = () => {		
	axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNum}&count=${this.props.pageSize}`,{withCredentials:true})
		 .then( response => {
			this.props.setUsers(response.data.items);
			this.props.setUsersTotalCount(response.data.totalCount);
		 });
		
	}

	onPageChanged = ( currentPageNum ) => {
		this.props.setCurrentPageNum(currentPageNum);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNum}&count=${this.props.pageSize}`, {withCredentials:true})
			 .then( response => {
				this.props.setUsers(response.data.items);
			 });
	};

	render() {
		return <Users {...this.props} onPageChanged ={this.onPageChanged}/>
	}
}

export default UsersAPI;
