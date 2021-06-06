import React, { useState} from "react";
import s from "./MyPosts.module.css";
import { reset ,Field, reduxForm } from "redux-form";
import { Textarea } from "./../../common/FormControl/FormControl";




const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.form}>
			<Field
				component={Textarea}
				name="postText"
				className={s.textarea}
				autoFocus={true}
				placeholder={"Что у вас нового"}
			/>

			<button className={s.button}>Опубликовать</button>
		</form>
	);
};
const ReduxPostForm = reduxForm({ form: "post" })(PostForm);





const MyPosts = React.memo((props) => {

	const [editMode, setEditMode] = useState(false);

	const formSumbitted =(formData, dispatch)=> {
		props.addPost(formData.postText);
		dispatch(reset("post"));
	}

	let posts = props.postsData.map( p => (
		<div key={p.postId} className={s.post}>
			<div className={s.about}>
				<img className={s.avatar} src={p.image} alt="" />
				<button className={s.name} >
					{p.name} <br />
					<span className={s.date}>{p.date}</span>
				</button>
				<button
					onClick={() => {
						props.deletePost(p.postId);
					}}
					className={s.delete}
				>
					×
				</button>
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

	// Этот колбек передастся кнопке в РедаксФорме, чтобы при нажатии вне происходил блюр 
	const offEditMode = ()=>{
		setEditMode(false)
	}
	
	return (
		<div className={s.my_posts_wrapper}>
			{editMode ? (
				<div tabIndex="100" onMouseLeave={()=>{setEditMode(false)}} className={s.textarea_wrapper__edit}>
					<img src="https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1" className={s.mini_image} alt="^__^"></img>
					<ReduxPostForm offEditMode={offEditMode} onSubmit={formSumbitted} />
				</div>
			) : (
				<div  onClick={()=>{setEditMode(true)}} className={s.textarea_wrapper}>
					<img src="https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1" className={s.mini_image} alt="^__^"></img>
					Что у вас нового?
				</div>
			)}
			{posts}
		</div>
	);
});

export default MyPosts;
