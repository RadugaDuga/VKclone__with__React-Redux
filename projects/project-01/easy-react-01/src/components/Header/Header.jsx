import React, { useState } from "react";
import s from "./Header.module.css";
import logo from "../../images/vk2.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	let [logoutBar, setLogoutBar] = useState(false)
	const toggleLogoutBar = ()=>{
		(logoutBar)? setLogoutBar(false): setLogoutBar(true)
	}

	return (
		<header className={s.header}>
			<img src={logo} className={s.logo} alt="" />
			<input className={s.search} placeholder="Поиск" />
			<button className={s.notify_btn}></button>
			<button className={s.music_btn}></button>
			<div className={s.loginBlock}>
				
				{ props.isAuth 
					? ( <div onClick={toggleLogoutBar} className={s.info}>	
							<p className={s.name}>{props.login}</p> 
							<img src="https://sun9-74.userapi.com/s/v1/if1/60mZRm3hBhGZoWmJvm4EbO4UfskTF8YOuVsepIveU3pt5qHLGqKWqyPlcrsmIKdcgMKVIfbK.jpg?size=50x0&quality=96&crop=391,0,1365,1365&ava=1" className={s.image} alt="" />
							<div  className={s.more_button}></div>
							{logoutBar && <button onBlur={toggleLogoutBar} onClick={props.logout} className={s.logout}>Выйти</button>}
						</div> ) 

					: ( <NavLink className={s.login} to={"/login"}> Вход </NavLink> )
				}

			</div>
			
		</header>
	);
};

export default Header;
