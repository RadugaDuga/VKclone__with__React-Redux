import React from "react";
import { addPost_AC, deletePost_AC, updateNewPostText_AC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPost_AC());
		},
		deletePost: () => {
			dispatch(deletePost_AC());
		},
		updateNewPostText: (text) => {
			dispatch(updateNewPostText_AC(text));
		},
	};
};

const MyPosts_Container = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPosts_Container;
