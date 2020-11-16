
import React from "react";
import { updateNewMessageText_ActionCreator , addMessage_ActionCreator } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";



const Dialogs_Container = (props) => {

	let state = props.store.getState();

	let updateMessageText = (text) => {
		props.store.dispatch(updateNewMessageText_ActionCreator(text));
	};
	let addMessage = () =>{
		props.store.dispatch(addMessage_ActionCreator())
	}

	return (
		<Dialogs 
		newMessageText = {state.messagesPage.newMessageText} 
		addMessage={addMessage} 
		updateMessageText={updateMessageText}
		Messages = {state.messagesPage.Messages}
		Dialogs = {state.messagesPage.Dialogs}
		/>
	)
};

export default Dialogs_Container;
