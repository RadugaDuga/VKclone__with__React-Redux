import { connect } from "react-redux";
import { addMessage } from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from "redux";


let mapStateToProps = (state) => {
	return {
		Messages: state.messagesPage.Messages,
		Dialogs: state.messagesPage.Dialogs,
		newMessageText:state.messagesPage.newMessageText,
		isAuth:state.auth.isAuth
	}
};




	
export default compose(
	connect( mapStateToProps, {addMessage}),
	withAuthRedirect
)(Dialogs)














//Кампоус заменяет это инкапсуляцией в себя деталей


	// let AuthRedirectComponent = withAuthRedirect(Dialogs)

	// const Dialogs_Container = connect( mapStateToProps, 
	// 	{
	// 		updateNewMessageText,
	// 		addMessage
	// 	}
	// )(AuthRedirectComponent);

	// export default Dialogs_Container;
