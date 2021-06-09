import React from "react";
import s from "./LogoutBar.module.css";

const LogoutBar = (props) => {
	return (
		<div className={s.logoutBar}>
			<div className={s.top_profile}>
				<img src="https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1"
					alt=""
					className={s.top_profile__image}
				/>
				<div className={s.top_profile__info}>
					<p className={s.info__name}>
						{props.login.includes("_")
							? `${props.login.split("_")[0]} ${props.login.split("_")[1]}`
							: props.login}
					</p>
					<p className={s.info__offer}> Перейти в VK Cherdak </p>
				</div>
			</div>
			<div className={s.separator}></div>
			<button className={s.setting}>Настройки</button>
			<button className={s.setting}>Помощь</button>
			<div className={s.separator}></div>
			<button onClick={props.logout} className={s.setting}>
				Выйти
			</button>
		</div>
	);
};

export default LogoutBar;
