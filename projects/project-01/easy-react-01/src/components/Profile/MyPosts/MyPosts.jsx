import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = ( props ) => {


	let posts = props.postsData.map( m => (
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

	let onAddPost = () => {
		props.addPost();
	};

	let onDeletePost = () => {
		props.deletePost();
	};

	let onUpdateNewPostText = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);
	};

	
	return (
		<div className={s.my_posts_wrapper}>
			<div className={s.textarea_wrapper}>
				<img src="https://sun9-38.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=96&crop=391,0,1365,1365&sign=d1f03e80391ec230e6cda87d90940965&ava=1"></img>
				<textarea
					onChange={onUpdateNewPostText}
					placeholder="Что у вас нового?"
					className={s.textarea}
					value={props.newPostText}
				/>
				<button className={s.button} onClick={onAddPost}>
					Опубликовать
				</button>
				<button className={s.button} onClick={onDeletePost}>
					Удалить
				</button>
			</div>
			{posts}
		</div>
	);
};



export default MyPosts;
