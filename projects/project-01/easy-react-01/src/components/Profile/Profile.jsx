import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img className={s.background_image} src="https://i.ytimg.com/vi/lcdbxwErBRY/maxresdefault.jpg"alt=""/>
			</div>
			<div>ava+opisanye</div>
			<MyPosts/>
		</div>
	);
};

export default Profile;
