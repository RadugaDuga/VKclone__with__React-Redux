
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Avatar from "./Avatar/Avatar";

const Profile = (props) => {
	return (
		<div className={s.profile_wrapper}>
			<div className={s.left_line}>
				<Avatar />
			</div>
			<div className={s.right_line}>
				<UserInfo />
				<MyPosts
					newPostText={props.newPostText}
					PostsData={props.profilePage.PostsData}
					dispatch={props.dispatch}
					
				/>
			</div>
		</div>
	);
};

// 'https://i.ytimg.com/vi/lcdbxwErBRY/maxresdefault.jpg'
export default Profile;
