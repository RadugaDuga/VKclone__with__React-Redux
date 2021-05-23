import React from "react";
import MyPosts_Container from "./MyPosts/MyPosts_Container";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Avatar from "./Avatar/Avatar";
import UserPhotos from "./UserPhotos/UserPhotos"
import Friends from "./Friends/Friends";



const Profile = (props) => {

	return (
		<div className={s.profile_wrapper}>
			<div className={s.left_line}>
				<Avatar isOwner={props.isOwner} profile={props.profile} />
				<Friends/>
			</div>
			<div className={s.right_line}>
				<UserInfo 
					profile={props.profile} 
					updateStatus={props.updateStatus} 
					status={props.status} 
				/>
				<UserPhotos/>
				<MyPosts_Container/>
			</div>
		</div>
	);
};



// 'https://i.ytimg.com/vi/lcdbxwErBRY/maxresdefault.jpg'
export default Profile;
