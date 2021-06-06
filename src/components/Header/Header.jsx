import React, { useRef, useState } from "react";
import s from "./Header.module.css";
import logo from "../../images/vk2.svg";
import { NavLink } from "react-router-dom";
import LogoutBar from "./LogoutBar/LogoutBar";

const Header = (props) => {
	let [logoutBar, setLogoutBar] = useState(false);
	const toggleLogoutBar = () => {
		logoutBar ? setLogoutBar(false) : setLogoutBar(true);
	};


	const handleMouseClick = (e) => {
		if (e.current.target !== blabla) {
		  setLogoutBar(false)
		}
	  }
	const blabla = useRef()

	return (
		<header className={s.header}>
			<img src={logo} className={s.logo} alt="" />
			<input className={s.search} placeholder="Поиск" />
			<button className={s.notify_btn}></button>
			<button className={s.music_btn}></button>
			<div className={s.loginBlock}>
				{props.isAuth ? (
					<div onClick={toggleLogoutBar} className={s.info}>
						<p className={s.name}>{props.login.split("_")[0]}</p>
						<img
							src="https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1"
							className={s.image}
							alt="^__^"
						/>
						<div className={s.more_button}></div>
						{logoutBar && (
							<LogoutBar ref={blabla} login={props.login} logout={props.logout}/>
						)}
					</div>
				) : (
					<NavLink className={s.login} to={"/login"}>
						Вход
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
