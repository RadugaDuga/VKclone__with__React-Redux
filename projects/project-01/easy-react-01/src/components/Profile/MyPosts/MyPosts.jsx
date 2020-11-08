import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let posts = props.PostsData.map((m) => (
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

	let newPostElement = React.createRef();

	let createPost = () => {
		let text = newPostElement.current.value;
		text ? props.createPost(text) : alert("Введите текст");
	};

	let deletePost = () => {
		if (posts.length < 2) {
			alert(
				"Я не буду удалять последний пост, это школьническое ссыкундяйство"
			);
		} else {
			props.deletePost();
		}
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={s.my_posts_wrapper}>
			<div className={s.textarea_wrapper}>
				<img src="https://sun9-38.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=96&crop=391,0,1365,1365&sign=d1f03e80391ec230e6cda87d90940965&ava=1"></img>
				<textarea
					onChange={onPostChange}
					placeholder="Что у вас нового?"
					className={s.textarea}
					ref={newPostElement}
					value={props.newPostText}
				/>
				<button className={s.button} onClick={createPost}>
					Опубликовать
				</button>
				<button className={s.button} onClick={deletePost}>
					Удалить
				</button>
			</div>
			{posts}
		</div>
	);
};

export default MyPosts;
