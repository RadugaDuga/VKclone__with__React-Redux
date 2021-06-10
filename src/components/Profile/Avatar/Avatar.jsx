import React from "react";
import s from "./Avatar.module.css";
import iconClock from "../../../images/Profile_Images/iconClock.svg";
import iconMoney from "../../../images/Profile_Images/iconMoney.svg";
import { useDispatch } from "react-redux";
import { savePhoto } from "../../../redux/profile-reducer";
import arrow from "../../../images/Common/arrow.png";

const defaultAvatar = "https://vk.com/images/camera_200.png";

const Avatar = (props) => {

	let dispatch = useDispatch();

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			dispatch(savePhoto(e.target.files[0]));
		}
	}



	return (
		<div>
			<div className={s.avatar_wrapper}>
				<div className={s.imageWrapper}>
					<img
						className={s.image}
						src={props.profile.photos ? props.profile.photos.large : defaultAvatar}
						alt="^__^"
					/>
					{props.isOwner ? (
						<div className={s.hoverTab}>
							<input
								className={s.input}
								id="file"
								type="file"
								onChange={onMainPhotoSelected}
							/>
							<div>
								<label className={s.label} htmlFor="file">
								<img className={s.iconForBtn} src={arrow} alt="" />
									Обновить фотографию
								</label>
							</div>
						</div>
					) : null}
				</div>

				<button className={s.button}>Редактировать</button>

				<button className={s.secondary_button}>
					<img alt="^__^" className={s.icon} src={iconClock} />
					Воспоминания
				</button>

				<button className={s.secondary_button}>
					<img alt="^__^" className={s.icon} src={iconMoney} />
					<p className={s.button_name}>Денежные переводы</p>
				</button>
			</div>
		</div>
	);
}

export default Avatar;
