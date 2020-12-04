import React from "react";
import MyPosts_Container from "./MyPosts/MyPosts_Container";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Avatar from "./Avatar/Avatar";



const Profile = (props) => {
	return (
		<div className={s.profile_wrapper}>
			<div className={s.left_line}>
				<Avatar profile={props.profile} />
			</div>
			<div className={s.right_line}>
				<UserInfo profile={props.profile} />
				<MyPosts_Container store={props.store} />
			</div>
		</div>
	);
};



// 'https://i.ytimg.com/vi/lcdbxwErBRY/maxresdefault.jpg'
export default Profile;
