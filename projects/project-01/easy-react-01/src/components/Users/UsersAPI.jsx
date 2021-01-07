import axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import "axios-progress-bar/dist/nprogress.css";
import { loadProgressBar } from "axios-progress-bar";

loadProgressBar();

class UsersAPI extends React.Component {
	componentDidMount = () => {
		this.props.toggleIsFetching(true);
		if (window.confirm("Загрузить с сервера?")) {
			axios
				.get(
					`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNum}&count=${this.props.pageSize}`
				)
				.then((response) => {
					this.props.toggleIsFetching(false);
					this.props.setUsers(response.data.items);
					this.props.setUsersTotalCount(response.data.totalCount);
				});
		} else {
			this.props.setUsers(this.props.users);
		}
	};

	onPageChanged = (pageNum) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPageNum(pageNum);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.toggleIsFetching(false);
				console.log(response);
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<div>
				{this.props.usersTotalCount == 0 ? <Preloader /> : null}
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
}

export default UsersAPI;
