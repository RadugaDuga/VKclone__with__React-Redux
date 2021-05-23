import React ,{memo} from "react";
import s from "./MyPosts.module.css";
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





const MyPosts = React.memo ((props) => {

	const addPost = (formData) => {
		let randomId = Math.random(0,9999999999999999)
		props.addPost(formData.postText, randomId);
	};

	let posts = props.postsData.map( p => (
		<div className={s.post}>
			<div className={s.about}>
				<img className={s.avatar} src={p.image} alt="" />
				<a className={s.name} href="#">
					{p.name} <br />
					<span className={s.date}>{p.date}</span>
				</a>
				<button onClick={()=>{props.deletePost(p.postId)}} className={s.delete}>×</button>
			</div>

			<p className={s.text}>{p.text}</p>

			<div className={s.stats}>
				<button className={s.like_button}></button>
				<span>{p.likes_count}</span>
				<button className={s.comment_button}></button>
				<span>{p.comments_count}</span>
				<button className={s.repost_button}></button>
				<span>{p.reposts_count}</span>
				<button className={s.views_button}></button>
				<span>{p.views_count}</span>
			</div>
		</div>
	));



	return (
		<div className={s.my_posts_wrapper}>
			<div className={s.textarea_wrapper}>
				<img src="https://sun9-38.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=96&crop=391,0,1365,1365&sign=d1f03e80391ec230e6cda87d90940965&ava=1"></img>
				<ReduxPostForm onSubmit={addPost} />
				
			</div>
			{posts}
		</div>
	);
})

export default MyPosts;
