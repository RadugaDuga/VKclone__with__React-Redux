import { connect } from "react-redux";
import { updateNewMessageText, addMessage } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
	return {
		Messages: state.messagesPage.Messages,
		Dialogs: state.messagesPage.Dialogs,
		newMessageText:state.messagesPage.newMessageText,
		isAuth:state.auth.isAuth
	}
};

const Dialogs_Container = connect( mapStateToProps, 
	{
		updateNewMessageText,
		addMessage
	}
)(Dialogs);

export default Dialogs_Container;
