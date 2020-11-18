import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/Dialog";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {
	let onUpdateMessageText = (event) => {
		let text = event.target.value;
		props.updateMessageText(text);
	};
	let addMessage = () => {
		props.addMessage();
	};

	let MessageElement = props.messagesPage.Messages.map((m) => (
		<MessageItem id={m.id} messageText={m.messageText} />
	));
	let DialogElement = props.messagesPage.Dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} image={d.image} />
	));

	return (
		<div className={s.dialogs_messages_wrapper}>
			<div className={s.dialog_wrapper}>{DialogElement}</div>
			<div className={s.sticky_wrapper}>
				<div className={s.messages_wrapper}>
					<div className="message_text">{MessageElement}</div>
				</div>
				<div className={s.textarea_container}>
					<textarea
						onChange={onUpdateMessageText}
						value={props.newMessageText}
						placeholder="Напишите сообщение ..."
					></textarea>
					<button onClick={addMessage}></button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
