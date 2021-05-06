import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/Dialog";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {


	let onUpdateMessageText = (e) => {
		let text = e.target.value;
		props.updateNewMessageText(text);
	};
	let addMessage = () => {
		props.addMessage();
	};


	let MessageElement = props.Messages.map((m) => (
		<MessageItem id={m.id} messageText={m.messageText} />
	));
	let DialogElement = props.Dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} image={d.image} />
	));


	return (
		

			<div className={s.content_wrapper}>

					<div className={s.search_wrapper}>
						<input className={s.search} placeholder="Поиск" />
					</div>
					<div className={s.info}>
						<img  src="https://sun9-25.userapi.com/s/v1/ig2/DiNCNxBt3JoVEDcJmIYbl5B3HkGjF59QN5SMnP2yUt9lsu8Vj_Qn15aMPoaN2fZI8vF-lGQ4YV2yAHcGU6ilzYGa.jpg?size=100x0&quality=96&crop=5,4,853,853&ava=1" className={s.image} alt=""/>
						<p className={s.name}> Дарья Амеличева </p>
					</div>

					<div className={s.dialogs}>
						{DialogElement}
					</div>
				
					<div className={s.messages}>
						<div className="message_text">
							{MessageElement}
						</div>
					</div>

					<div className={s.textarea_wrapper}>
						<button className={s.addFiles_btn}></button>
							<textarea className={s.text} value={props.newMessageText} placeholder="Сообщение" onChange={onUpdateMessageText}></textarea>	
						<button className={s.addSmile_btn}></button>
						<button 
							className={s.addMessage_btn} 
							onClick={addMessage}>
						</button>
					</div>

			</div>
		
	);
};

export default Dialogs;
