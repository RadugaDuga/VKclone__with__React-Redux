import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

const UserItem = ({ user, ...props }) => {
	return (
		<div key={props.key} className={s.user_wrapper}>
			<img
				className={s.avatar}
				src={
					user.photos.small
						? user.photos.small
						: "https://vk.com/images/camera_200.png?ava=1"
				}
				alt=""
			/>

			<div className={s.information}>
				<NavLink to={"/profile/" + user.id}>{user.name}</NavLink>
				{user.status ? <p>{user.status}</p> : null}
				<p className={s.message}> Написать сообщение </p>
			</div>

			{user.followed ? (
				//Если хоть чье нибудь айди есть в массиве - этому айди устанавливается button disabled
				<button
					disabled={props.followingProgress.some( id => id === user.id)}
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
					disabled={props.followingProgress.some( id => id === user.id)}
					onClick={() => {
						props.follow(user.id);
					}}
					className={s.follow}
				>
					Добавить в друзья
				</button>
			)}
		</div>
	);
};

export default UserItem;
