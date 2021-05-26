
import React  from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialog.module.css"



const DialogItem = (props) => {
	document.title = `Мессенджер`
	return (
		<div key={props.key} className={s.dialog}>
			
				
				<p className={s.container}>
					<img src={props.image} alt="404"></img>
				</p>
			
				<p className={s.about}>{props.name}</p>
			
		</div>
	);
};



export default DialogItem;