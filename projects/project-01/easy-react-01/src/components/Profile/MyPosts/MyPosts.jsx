
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPost_ActionCreator , deletePost_ActionCreator, updateNewPostText_ActionCreator} from './../../../redux/profile-reducer';



const MyPosts = (props) => {
	let posts = props.PostsData.map( m => (
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

	

	let addPost = () => {
		props.dispatch(addPost_ActionCreator());
	};

	let deletePost = () => {
		props.dispatch(deletePost_ActionCreator())
	};

	let updateNewPostText = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostText_ActionCreator(text));
	};

	let newPostElement = React.createRef();

	return (
		<div className={s.my_posts_wrapper}>
			<div className={s.textarea_wrapper}>
				<img src="https://sun9-38.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=96&crop=391,0,1365,1365&sign=d1f03e80391ec230e6cda87d90940965&ava=1"></img>
				<textarea
					onChange={updateNewPostText}
					placeholder="Что у вас нового?"
					className={s.textarea}
					ref={newPostElement}
					value={props.newPostText}
				/>
				<button className={s.button} onClick={addPost}>
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
