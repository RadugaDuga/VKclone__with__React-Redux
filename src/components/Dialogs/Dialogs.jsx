import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/Dialog";
import MessageItem from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../common/FormControl/FormControl";
import { maxLengthCreator,required} from "./../../redux/Utilites/Validators/Validator";


const MessageForm = (props) => {
	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<Field
				validate={[required, maxLengthBuild]}
				className={s.text}
				placeholder={"Ваше имя"}
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

	const addNewMessage = (data) => {
		props.addMessage(data.message);
	};

	let MessageElement = props.Messages.map((m) => (
		<MessageItem key={m.id} messageText={m.messageText} />
	));
	let DialogElement = props.Dialogs.map((d) => (
		<DialogItem key={id} name={d.name}  image={d.image} />
	));

	return (
		<div className={s.content_wrapper}>
			<div className={s.search_wrapper}>
				<input className={s.search} placeholder="Поиск" />
			</div>
			<div className={s.info}>
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
			</div>

			<div className={s.textarea_wrapper}>
				<button className={s.addFiles_btn}></button>
				<ReduxMessageForm onSubmit={addNewMessage} />
				<button className={s.addSmile_btn}></button>
			</div>
		</div>
	);
};

export default Dialogs;
