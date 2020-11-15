import React from "react";
import s from "./Post.module.css";




const Post = (props) => {
	return (
		<div className={s.post}>

			<div className={s.about}>
				<img className={s.avatar} src={props.image} alt=''/>
				<a className={s.name} href="/lol">
					{props.name} <br/>
                    <span className={s.date}>{props.date}</span>
				</a>
			</div>

			<p className={s.text} >
				{props.text}
			</p>

			<div className={s.stats}>
				<button className={s.like_button}></button><span>{props.likes_count}</span>
				<button className={s.comment_button}></button><span>{props.comments_count}</span>
				<button className={s.repost_button}></button><span>{props.reposts_count}</span>
				<button className={s.views_button}></button><span>{props.views_count}</span>
			</div>

		</div>
	);
};

export default Post;
