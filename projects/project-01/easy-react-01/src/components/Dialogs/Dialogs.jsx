
import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { updateNewMessageText_ActionCreator , addMessage_ActionCreator } from "../../redux/messages-reducer";
import arrow from '../../images/Messages_Images/arrow.svg';


const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
				<img src={props.image} className={s.image} alt="Error 404"></img>
				<div className={s.about}>{props.name}</div>
			</NavLink>
		</div>
	);
};


const MessageItem = (props) => {
	return <div>{props.messageText}</div>;
};



const Dialogs = (props) => {



	let newMessageText = (event) => {
		let text = event.target.value;
		props.dispatch(updateNewMessageText_ActionCreator(text));
	};
	let addMessage = () =>{
		props.dispatch(addMessage_ActionCreator())
	}




	let MessageElement = props.Messages.map( m => (
		<MessageItem id={m.id} messageText={m.messageText} />
	));
	let DialogElement = props.Dialogs.map( d => (
		<DialogItem name={d.name} id={d.id} image={d.image} />
	));



	let newMessageElement = React.createRef();
	return (
		<div className={s.dialogs_messages_wrapper}>
			<div className={s.dialog_wrapper}>{DialogElement}</div>
			<div className={s.messages_wrapper}>
				
				<div className="message_text">
					{MessageElement}
				</div>
			</div>
			<div className={s.textarea_container}>
				<textarea
					onChange={newMessageText}
					value={props.newMessageText}
				></textarea>
				<button onClick={addMessage}></button>
			</div>
		</div>
	);
};

export default Dialogs;
