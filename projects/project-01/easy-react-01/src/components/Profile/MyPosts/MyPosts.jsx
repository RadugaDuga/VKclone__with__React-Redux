import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

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

	return (
		<div className={s.myPosts}>
			My posts
			<div>
				<textarea></textarea>
				<button>Add Post</button>
				<button>Remove</button>
			</div>
			{posts}
		</div>
	);
};

export default MyPosts;
