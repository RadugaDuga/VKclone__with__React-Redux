import axios from "axios";
import React from "react";
import s from "./Users.module.css";

class Users extends React.Component {

	componentDidMount =()=> {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			 .then( response => {
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount)
			 });
	}

	onPageChanged = (pageNumber)=> {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			 .then( response => {
				this.props.setUsers(response.data.items);
			 });
	}

	render(){
		
		console.log(this.props.usersTotalCount, this.props.pageSize);
		
		let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}
		return (
			<div className={s.content}>
				<div>
					{pages.map( p => {
						return (
							<button
								onClick={()=>{this.onPageChanged(p)}}
								className={this.props.currentPage === p && s.activePage}
							>
								{p}
							</button>
						);
					})}
				</div>
				<div className={s.users_wrapper}>
					{this.props.users.map( u => (
						<div key={u.id} className={s.user_wrapper}>
							<div>
								<img
									className={s.avatar}
									src={
										u.image
											? u.image
											: "https://okeygeek.ru/wp-content/uploads/2017/09/1435667734_jh-6i8w73xg.jpg"
									}
									alt=""
								/>
							</div>
							<div className={s.information}>
								<a href="#"> {u.name} </a>
								<p> {u.status} </p>
							</div>
							{u.followed ? (
								<button
									onClick={() => this.props.unfollow(u.id)}
									className={s.unfollow}
								>
									Вы подписаны
								</button>
							) : (
								<button
									onClick={() => this.props.follow(u.id)}
									className={s.follow}
								>
									Подписаться
								</button>
							)}
						</div>
					))}
				</div>
				<div className={s.sidebar}></div>
			</div>
		);
	}
};

export default Users;
