import React from "react";
import s from "./Avatar.module.css";
import iconClock from "../../../images/Profile_Images/iconClock.svg";
import iconMoney from "../../../images/Profile_Images/iconMoney.svg";

const Avatar = (props) => {
	return (
		<div>
			<div className={s.avatar_wrapper}>
				<img
					className={s.image}
					src="https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=200x0&quality=96&crop=391,0,1365,1365&sign=d0f833aaff02b007925c12c1e17a8d3a&ava=1"
					alt="^__^"
				/>

				<button className={s.button}>Редактировать</button>
				<button className={s.secondary_button}>
					<img className={s.icon} src={iconClock} />
					Воспоминания
				</button>
				<button className={s.secondary_button}>
					<img className={s.icon} src={iconMoney} />
					<p className={s.button_name}>Денежные переводы</p>
				</button>
			</div>
		</div>
	);
};

export default Avatar;
