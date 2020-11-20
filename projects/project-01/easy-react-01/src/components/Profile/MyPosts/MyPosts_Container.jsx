import React from "react";
import {
	addPost_ActionCreator,
	deletePost_ActionCreator,
	updateNewPostText_ActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';



let mapStateToProps = (state)=>{
	return{
		postsData:state.profilePage.postsData,
		newPostText:state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch)=> {
	return{
		addPost: ()=>{
			
			dispatch(addPost_ActionCreator());
		},
		deletePost: ()=>{
			dispatch(deletePost_ActionCreator());
		},
		updateNewPostText: (text)=>{
			dispatch(updateNewPostText_ActionCreator(text));
		}
	}
}

const MyPosts_Container = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPosts_Container;
