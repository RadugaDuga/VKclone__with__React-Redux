
import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
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
					<p className={s.status_wrapper}>
						<ProfileStatus status={'ssssss'}/>
					</p>
				</div>
				<div className={s.about_user}>
					<p> День рождения:      </p><a><span>26 августа </span></a> 
					<p> Город:              </p><a><span>Новосибирск</span></a> 
					<p> Семейное положение: </p><a><span>влюблен    </span></a> 
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