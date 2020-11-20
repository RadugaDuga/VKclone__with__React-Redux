
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
 
 let initialState = {
    Messages: [
        { id: 1, messageText: "Привет, что делал сегодня? Я очень скучаю" },
        { id: 2, messageText: "Дарова, сидел учил реакт по видосам Димыча" },
        { id: 3, messageText: "Аахахах" },
        { id: 4, messageText: "Видел этот мем на пикабе" },
    ],

    Dialogs: [
        {
            id: 1,
            name: "Дарья Амеличева",
            image:
                "https://sun1-23.userapi.com/impg/kBTMqEc51V77suUcU8DXXV7NMWyz1SIXtR9acQ/cKvcJzxHqA4.jpg?size=50x0&quality=88&crop=5,4,853,853&sign=6f0a40472b73af61b1872a8b5a1006c8&ava=1",
        },
        {
            id: 2,
            name: "Иван Токарев",
            image:
                "https://sun1-92.userapi.com/impg/c857736/v857736275/ff93a/91y1W9Lqpc4.jpg?size=50x0&quality=88&crop=484,258,900,900&sign=a0a404392920e5360e4eed2a6b75f4ba&ava=1",
        },
        {
            id: 3,
            name: "Алекс Семченко",
            image:
                "https://sun1-96.userapi.com/impf/c837322/v837322530/55ff9/7JsqhYlpm34.jpg?size=50x0&quality=88&crop=466,181,1259,1259&sign=d4711f6a174005ed0b92cc8c2959f17f&ava=1",
        },
        {
            id: 4,
            name: "Сергей Лисенок",
            image:
                "https://sun1-97.userapi.com/impf/c626527/v626527581/20991/cuR-S7RYIuM.jpg?size=50x0&quality=88&crop=66,85,372,372&sign=3069b00461edc219322e13bce9da507a&ava=1",
        },
        {
            id: 5,
            name: "Георгий Букиа",
            image:
                "https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
        },
        {
            id: 6,
            name: "Сергей Лисенок",
            image:
                "https://sun1-97.userapi.com/impf/c626527/v626527581/20991/cuR-S7RYIuM.jpg?size=50x0&quality=88&crop=66,85,372,372&sign=3069b00461edc219322e13bce9da507a&ava=1",
        },
        {
            id: 7,
            name: "Иван Токарев",
            image:
                "https://sun1-92.userapi.com/impg/c857736/v857736275/ff93a/91y1W9Lqpc4.jpg?size=50x0&quality=88&crop=484,258,900,900&sign=a0a404392920e5360e4eed2a6b75f4ba&ava=1",
        }
    ],

    newMessageText: "234234"
}


export const messagesReducer = (state = initialState, action)=>{
    let stateCopy;
    switch(action.type){
        
        case ADD_MESSAGE:
            
            stateCopy = {
                ...state,
                Messages:[
                    ...state.Messages,
                    {id: 2, messageText:state.newMessageText}
                ],
                newMessageText:""
            }
            
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                newMessageText:action.text 
             }
            
            return stateCopy;    

        default:  return state;
    }

}

export const updateNewMessageText_ActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	text: text,
});
export const addMessage_ActionCreator = ()=>({ type: ADD_MESSAGE });






export default messagesReducer;