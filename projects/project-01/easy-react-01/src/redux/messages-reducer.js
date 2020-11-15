
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";


 const messagesReducer = (state, action)=>{
    
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 2,
                messageText:state.newMessageText
            };
            state.Messages.push(newMessage)
            state.newMessageText = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;    

        default:  return state;
    }

}

export const updateNewMessageText_ActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	text: text,
});
export const addMessage_ActionCreator = ()=>({ type: ADD_MESSAGE });






export default messagesReducer;