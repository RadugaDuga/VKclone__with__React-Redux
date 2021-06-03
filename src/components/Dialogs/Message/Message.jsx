import React from "react";
import s from "./Message.module.css";

const MessageItem = (props) => {
	return (
		<div className={s.container}>
			<img src={props.image}alt="^__^" className={s.image}/>
			<div className={s.name_message_wrapper}>
                <p className={s.name}>{props.name} <span className={s.date}>{props.date}</span></p>
				<p className={s.message}>{props.messageText}</p>
			</div>
		</div>
	)
}

export default MessageItem;
