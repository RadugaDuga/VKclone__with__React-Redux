import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const OneDialog = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
				<img src={props.img} className={s.image}></img>
				<div className={s.about}>{props.name}</div>
			</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div>{props.messageText}</div>;
};

const Dialogs = () => {
	return (
		<div className={s.dialogs_messages_wrapper}>
			<div className={s.dialog_items}>
				<OneDialog
					name="Дарья Амеличова"
					id="1"
					img="https://sun1-23.userapi.com/impg/kBTMqEc51V77suUcU8DXXV7NMWyz1SIXtR9acQ/cKvcJzxHqA4.jpg?size=50x0&quality=88&crop=5,4,853,853&sign=6f0a40472b73af61b1872a8b5a1006c8&ava=1"
				/>
				<OneDialog
					name="Иван Токарев"
					id="2"
					img="https://sun1-92.userapi.com/impg/c857736/v857736275/ff93a/91y1W9Lqpc4.jpg?size=50x0&quality=88&crop=484,258,900,900&sign=a0a404392920e5360e4eed2a6b75f4ba&ava=1"
				/>
				<OneDialog
					name="Алекс Семченко"
					id="3"
					img="https://sun1-96.userapi.com/impf/c837322/v837322530/55ff9/7JsqhYlpm34.jpg?size=50x0&quality=88&crop=466,181,1259,1259&sign=d4711f6a174005ed0b92cc8c2959f17f&ava=1"
				/>
				<OneDialog
					name="Сергей Лисенок"
					id="4"
					img="https://sun1-97.userapi.com/impf/c626527/v626527581/20991/cuR-S7RYIuM.jpg?size=50x0&quality=88&crop=66,85,372,372&sign=3069b00461edc219322e13bce9da507a&ava=1"
				/>
				<OneDialog
					name="Георгий Букиа"
					id="5"
					img="https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1"
				/>
			</div>
			<div className={s.messages_wrapper}>
				<Message messageText='Привет, что делал сегодня? Я очень скучаю'/>
				<Message messageText='Дарова, сидел учил реакт по видосам Димыча'/>
				<Message messageText='Аахахах'/>
				<Message messageText='Видел этот мем на пикабе'/>
				<Message messageText='Та ты зоибаль со своим пикобу'/>
			</div>
		</div>
	);
};

export default Dialogs;
