import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const DialogItem = (props) => {
	document.title = `Мессенджер`;
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/"+ props.id } activeClassName={s.active}>
				<div className={s.container}>
					<img src={props.image} alt="404"></img>
				</div>

				<div className={s.about}>{props.name}</div>
			</NavLink>
		</div>
	);
};

export default DialogItem;
