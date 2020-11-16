
import React  from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialog.module.css"



const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
				<img src={props.image} className={s.image} alt="Error 404"></img>
				<div className={s.about}>{props.name}</div>
			</NavLink>
		</div>
	);
};



export default DialogItem;