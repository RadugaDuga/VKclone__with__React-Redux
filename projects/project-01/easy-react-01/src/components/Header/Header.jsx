import React from "react";
import s from "./Header.module.css";
import logo from "../../images/vk2.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src={logo} className={s.logo} alt="" />
			<input className={s.search} placeholder="Поиск" />
			<button className={s.notify_btn}></button>
			<button className={s.music_btn}></button>
			<div className={s.loginBlock}>
				
					{
						props.isAuth ? 
							(
								
								<div className={s.info}>
									
									<p className={s.name}>{props.login}</p> 
									<img src="https://sun9-74.userapi.com/s/v1/if1/60mZRm3hBhGZoWmJvm4EbO4UfskTF8YOuVsepIveU3pt5qHLGqKWqyPlcrsmIKdcgMKVIfbK.jpg?size=50x0&quality=96&crop=391,0,1365,1365&ava=1" className={s.image} alt="" />
									<button className={s.moreBtn}></button>
								</div>
								
							) 
						: 
							(
								<NavLink className={s.link} to={"/login"}>
									Вход
								</NavLink>
							)
					}
				
			</div>
			
		</header>
	);
};

export default Header;
