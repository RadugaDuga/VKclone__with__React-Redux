import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

const UserItem = ({ user, ...props }) => {
	return (
		<div key={ props.key } className={s.user_wrapper}>
			<div>
				<NavLink to={"/profile/" + user.id}>
					<img
						className={s.avatar}
						src={
							user.photos.small
								? user.photos.small
								: "https://vk.com/images/camera_200.png?ava=1"
						}
						alt=""
					/>
				</NavLink>
			</div>

			<div className={s.information}>
				<p>
					<a href="#"> {user.name} </a>
				</p>
				<p>{user.status ? user.status : null}</p>
				<p className={s.message}> Написать сообщение </p>
			</div>

			{user.followed ? (
				//Если хоть чье нибудь айди есть в массиве - этому айди устанавливается button disabled
				<button
					disabled={props.followingProgress.some( id => id == user.id)}
					onClick={() => {
						props.unfollow(user.id);
					}}
					className={s.unfollow}
				>
					Удалить из друзей
				</button>
			) : (
				//Если хоть чье нибудь айди есть в массиве - этому айди устанавливается button disabled
				<button
					disabled={props.followingProgress.some((id) => id == user.id)}
					onClick={() => {
						props.follow(user.id);
					}}
					className={s.follow}
				>
					Добавить в друзья
				</button>
			)}
		</div>
	)
};

export default UserItem;
