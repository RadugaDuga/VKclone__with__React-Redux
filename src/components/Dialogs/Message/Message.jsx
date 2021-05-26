import  React  from 'react';
import s from "./Message.module.css"


const MessageItem = (props) => {
    return <div key={props.key} className={s.message}>{props.messageText}</div>;
};


export default MessageItem;