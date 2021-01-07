import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
	
	let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
			<div className={s.content}>
				<section>
				<div className={s.users_counter}>Люди <span className={s.count}>{props.usersTotalCount}</span></div>
				<div className={s.users_wrapper}>
					{props.users.map( u => (
						<div key={u.id} className={s.user_wrapper}>

							<div>
								<NavLink to={"/profile/" + u.id}>
									<img className={s.avatar} src={u.photos.small ? u.photos.small : "https://vk.com/images/camera_200.png?ava=1"} alt=""/>
								</NavLink>
							</div>

							<div className={s.information}>
								<a href="#"> {u.name} </a>
								{u.status?<p> {u.status} </p>: null}
								<p className={s.message}> Написать сообщение  </p>
							</div>

							{u.followed ? 
								(<button onClick={() => props.unfollow(u.id)} className={s.unfollow}> Вы подписаны </button> ) 
								: 
								(<button onClick={() => props.follow(u.id)} className={s.follow}> Добавить в друзья </button>)
							}
	
						</div>
					))}
				</div>
				</section>

				<div>
					{pages.map((p) => {
						return (
							<button onClick={() => {props.onPageChanged(p)}} className={props.currentPageNum === p && s.activePage}>
								{p}
							</button>
						);
					})}
				</div>

				<div className={s.sidebar}></div>
			</div>
		
	);
};

export default Users;
