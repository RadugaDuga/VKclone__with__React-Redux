
import React from "react";
import s from "./Avatar.module.css";

const Avatar = () => {
	return (
		<div>
			<div className={s.avatar_wrapper}>
				<img
					className={s.image}
					src="https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=200x0&quality=90&crop=391,0,1365,1365&sign=6da9e5c91d43fd34023c0d2659ef0989&ava=1"
					alt="^__^"
				/>
				<div className={s.buttons_container}>
					<button className={s.button}>Редактировать</button>
					<button className={s.button}>	 •••       </button>
				</div>
			</div>
		</div>
	);
};

export default Avatar;
