import React from "react";
import { connect } from "react-redux";
import {
	updateNewMessageText_ActionCreator,
	addMessage_ActionCreator,
} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
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
