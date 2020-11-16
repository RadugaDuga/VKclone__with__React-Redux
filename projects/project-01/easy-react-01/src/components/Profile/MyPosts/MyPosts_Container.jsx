import React from "react";
import {
	addPost_ActionCreator,
	deletePost_ActionCreator,
	updateNewPostText_ActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPosts_Container = (props) => {
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPost_ActionCreator());
	};

	let deletePost = () => {
		props.store.dispatch(deletePost_ActionCreator());
	};

	let updateNewPostText = (text) => {
		let action = updateNewPostText_ActionCreator(text);
		props.store.dispatch(action);
	};

	return (
		<MyPosts
			updateNewPostText={updateNewPostText}
			addPost={addPost}
			postsData={state.profilePage.postsData}
			deletePost={deletePost}
			newPostText={state.profilePage.newPostText}
		/>
	);
};



export default MyPosts_Container;
