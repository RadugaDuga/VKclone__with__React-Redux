import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";

const Profile = () => {
	return (
		<div className={s.content}>
			<UserInfo/>
			<MyPosts/>
		</div>
	);
};

export default Profile;
