import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Friends.module.css";

const Friends = () => {
	const friends = useSelector(state => state.friends.friendsData);

	let friendsElements = friends.map( f => (
		<div key={f.id} className={s.friend_item}>
			<div>
				<img src={f.photo} className={s.image} alt="" />
			</div>
			<div className={s.name}>{f.name}</div>
		</div>
	));

	return (
		<div className={s.container}>
			<div className={s.header}> Друзья <span className={s.counter}>{friends.length}</span></div>
			<div className={s.friends}>{friendsElements}</div>
		</div>
	);
};

export default Friends;
