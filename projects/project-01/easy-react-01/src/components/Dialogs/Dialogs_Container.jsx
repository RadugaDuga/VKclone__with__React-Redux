import React from "react";
import { connect } from "react-redux";
import {
	updateNewMessageText_ActionCreator,
	addMessage_ActionCreator,
} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
	return {
		Messages: state.messagesPage.Messages,
		Dialogs: state.messagesPage.Dialogs,
		newMessageText:state.messagesPage.newMessageText
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		updateMessageText: (text) => {
			dispatch(updateNewMessageText_ActionCreator(text));
		},
		addMessage: () => {
			dispatch(addMessage_ActionCreator());
		},
	};
};
const Dialogs_Container = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default Dialogs_Container;
