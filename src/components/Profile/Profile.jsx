import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Avatar from "./Avatar/Avatar";
import UserPhotos from "./UserPhotos/UserPhotos"
import Friends from "./Friends/Friends";



const Profile = (props) => {

	if(!props.profile.contacts){
		return null
	}

	document.title = props.profile.fullName
	return (
		
		<div className={s.profile_wrapper}>
			<div className={s.left_line}>
				<Avatar  savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} />
				<Friends/>
			</div>
			<div className={s.right_line}>
				<UserInfo 
					profile={props.profile} 
					
					// эти два пропса нужны для компоненты ProfileStatusWithHooks и я заменил их на хуки в самой компоненте 
					updateStatus={props.updateStatus} 
					status={props.status} 
				/>
				<UserPhotos/>
				<MyPostsContainer/>
			</div>
		</div>
	);
};



export default Profile;
