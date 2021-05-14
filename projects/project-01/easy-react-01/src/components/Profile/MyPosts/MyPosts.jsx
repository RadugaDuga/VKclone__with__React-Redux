import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator,required,} from "./../../../redux/Utilites/Validators/Validator";
import { Textarea } from './../../common/FormControl/FormControl';

const maxLengthBuild = maxLengthCreator(30);

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.form}>
			<Field
				validate={[required, maxLengthBuild]}
				component={Textarea}
				name="postText"
				className={s.textarea}
			/>
			<button className={s.button}>Опубликовать</button>
		</form>
	);
};

const ReduxPostForm = reduxForm({ form: "post" })(PostForm);

const MyPosts = (props) => {
	const addPost = (formData) => {
		props.addPost(formData.postText);
	};

	let posts = props.postsData.map((m) => (
		<Post
			id={m.id}
			name={m.name}
			image={m.image}
			text={m.text}
			likes_count={m.likes_count}
			comments_count={m.comments_count}
			reposts_count={m.repost_count}
			views_count={m.views_count}
			date={m.date}
		/>
	));

	let onDeletePost = () => {
		props.deletePost();
	};

	return (
		<div className={s.my_posts_wrapper}>
			<div className={s.textarea_wrapper}>
				<img src="https://sun9-38.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=96&crop=391,0,1365,1365&sign=d1f03e80391ec230e6cda87d90940965&ava=1"></img>
				<ReduxPostForm onSubmit={addPost} />
				<button className={s.button} onClick={onDeletePost}>
					Удалить
				</button>
			</div>
			{posts}
		</div>
	);
};

export default MyPosts;
