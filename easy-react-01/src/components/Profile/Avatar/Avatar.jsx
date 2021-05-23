import React from "react";
import s from "./Avatar.module.css";
import iconClock from "../../../images/Profile_Images/iconClock.svg";
import iconMoney from "../../../images/Profile_Images/iconMoney.svg";

const defaultAvatar =
	"https://sun9-43.userapi.com/s/v1/if1/RhlzkXE7CF8eMuejwF6MRzgCP5lb9Kx0sy_nwN2ZepMzT8DJWIXC2YfT6alcuvJ2QfpnujEv.jpg?size=200x0&quality=96&crop=391,0,1365,1365&ava=1";

const Avatar = (props) => {
	if (!props.profile) {
		return null;
	}
	return (
		<div>
			<div className={s.avatar_wrapper}>
				<img
					className={s.image}
					src={
						props.profile.photos.small || defaultAvatar
					}
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
