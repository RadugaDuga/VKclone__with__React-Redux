import axios from "axios";
import React from "react";
import Users from "./Users";
import "axios-progress-bar/dist/nprogress.css";
import { loadProgressBar } from "axios-progress-bar";
import { usersAPI } from './../../API/api';

loadProgressBar();


class UsersAPI extends React.Component {

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
		return <Users {...this.props} onPageChanged ={this.onPageChanged}/>
	}

}

export default UsersAPI;
