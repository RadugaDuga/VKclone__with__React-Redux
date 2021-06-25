import React , { useRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessageItem from "./Message/Message";
import { reset ,Field, reduxForm } from "redux-form";
import { Textarea } from "./../common/FormControl/FormControl";
import { maxLengthCreator,required} from "./../../redux/Utilites/Validators/Validator";
import backArrow from "../../images/Messages_Images/back-arrow.svg"
import src from "../../images/Favicons/messagesFavicon.svg"

const MessageForm = (props) => {
	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<Field
				validate={[required, maxLengthBuild]}
				className={s.text}
				placeholder={"Напишите сообщение"}
				component={Textarea}
				name={"message"}
			/>
			
			<button className={s.addMessage_btn}></button>
		</form>
	);
};
const ReduxMessageForm = reduxForm({ form: "message" })(MessageForm);
const maxLengthBuild = maxLengthCreator(100);


const Dialogs = (props) => {


	let MessageElement = props.Messages.map( m => (
		<MessageItem key={m.id} name={m.name} is_moderator={m.is_moderator} date={m.date} image={m.image} messageText={m.messageText} />
	));
	let DialogElement = props.Dialogs.map( d => (
		<DialogItem key={d.id} id={d.id} name={d.name}  image={d.image} />
	));

	

	const formSubmitted = async (data, dispatch)=> {
		await props.addMessage(data.message);
		dispatch(reset("message"));
		autoScroll.current.scrollIntoView({ behavior:'smooth'})
	}


	const autoScroll = useRef()

	document.getElementById("favicon").href = src
	document.title = `Мессенджер`;



	return (
		<div className={s.content_wrapper}>
			<div className={s.search_wrapper}>
				<input className={s.search} placeholder="Поиск" />
			</div>
			<div className={s.info}>
				<img src={backArrow} alt="" className={s.backArrow} />
				<img
					src="https://sun9-25.userapi.com/s/v1/ig2/DiNCNxBt3JoVEDcJmIYbl5B3HkGjF59QN5SMnP2yUt9lsu8Vj_Qn15aMPoaN2fZI8vF-lGQ4YV2yAHcGU6ilzYGa.jpg?size=100x0&quality=96&crop=5,4,853,853&ava=1"
					className={s.image}
					alt=""
				/>
				<p className={s.name}> Дарья Амеличева </p>
			</div>

			<div className={s.dialogs}>
				{DialogElement}
			</div>

			<div className={s.messages}>
				{MessageElement}
				<div ref={autoScroll}></div>
			</div>

			<div className={s.textarea_wrapper}>
				<button className={s.addFiles_btn}></button>
				<ReduxMessageForm onSubmit={formSubmitted} />
				<button className={s.addSmile_btn}></button>
			</div>
		</div>
	);
};

export default Dialogs;
