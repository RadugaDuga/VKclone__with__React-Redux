
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import s from "./UserInfo.module.css";

const UserInfo = (props) => {

	if (!props.profile) {
		return null
	}
	return (
		<div className={s.container}>
			<div className={s.info_wrapper}>
				<div className={s.user_name}>
					<p>  	{props.profile.fullName}     <span className={s.status}>online</span></p>
					<div className={s.status_wrapper}>
						<ProfileStatusWithHooks/>
					</div>
				</div>
				<div className={s.about_user}>
					<p> День рождения:      </p><button className={s.btn}><span>26 августа </span></button> 
					<p> Город:              </p><button className={s.btn}><span>Новосибирск</span></button> 
					<p> Семейное положение: </p><button className={s.btn}><span>влюблен    </span></button> 
				</div>
				<button className={s.more_button}>Показать подробную информацию..</button>
			</div>
			<div className={s.user_stats}>
				<p>54<span>друзей</span></p>
				<p>38<span>подписчиков</span></p>
				<p>4<span>фотографии</span></p>
				<p>2<span>отметки</span></p>
				<p>36<span>видеозаписей</span></p>
			</div>
		</div>
	);
};

export default UserInfo;


// Георгий Букиа <span>&#128123;</span> 