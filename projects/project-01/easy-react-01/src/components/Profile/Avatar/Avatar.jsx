import React from "react";
import s from "./Avatar.module.css";
import Preloader from "../../common/Preloader/Preloader";

const Avatar = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div>
			<div className={s.avatar_wrapper}>
				<img
					className={s.image}
					src={props.profile.photos.large}
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
