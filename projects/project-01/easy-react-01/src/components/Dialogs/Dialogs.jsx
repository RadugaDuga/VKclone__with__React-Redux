import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";








const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
				<img src={props.image} className={s.image} alt='Error 404'></img>
				<div className={s.about}>{props.name}</div>
			</NavLink>
		</div>
	);
};




const Message = (props) => {
	return <div>{props.messageText}</div>;
};





const Dialogs = (props) => {

	



	
	let MessageElement = props.Messages.map( m => <Message id={m.id} messageText={m.messageText}/>)

	let DialogElement = props.Dialogs.map( d => <DialogItem name={d.name} id={d.id} image={d.image}/>) 
		
	

	return (
		<div className={s.dialogs_messages_wrapper}>
			<div className={s.dialog_items}>
				{DialogElement}
			</div>
			<div className={s.messages_wrapper}>
				{MessageElement}
			</div>
		</div>
	);
};

export default Dialogs;
