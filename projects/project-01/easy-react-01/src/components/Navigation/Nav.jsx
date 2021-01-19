import React from "react";
import s from "./Nav.module.css";
import profile from "../../images/Nav_Images/profile.svg";
import news from "../../images/Nav_Images/news.svg";
import messenger from "../../images/Nav_Images/messenger.svg";
import friends from "../../images/Nav_Images/friends.svg";
import groups from "../../images/Nav_Images/groups.svg";
import photos from "../../images/Nav_Images/photos.svg";
import music from "../../images/Nav_Images/music.svg";
import videos from "../../images/Nav_Images/videos.svg";
import clyps from "../../images/Nav_Images/clyps.svg";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<div className={s.sticky}>
			<nav className={s.nav}>
        <NavLink to='/profile' activeClassName={s.active}><img className={s.icon} src={profile}   alt='^__^'/>  Моя страница </NavLink>
        <NavLink to='/feed'    activeClassName={s.active}><img className={s.icon} src={news}      alt='^__^'/>  Новости       </NavLink>
        <NavLink to='/dialogs' activeClassName={s.active}><img className={s.icon} src={messenger} alt='^__^'/>  Мессенджер    </NavLink>
        <NavLink to='/users'   activeClassName={s.active}><img className={s.icon} src={friends}   alt='^__^'/>  Друзья  </NavLink>
        <NavLink to='/groups'  activeClassName={s.active}><img className={s.icon} src={groups}    alt='^__^'/>  Сообщества    </NavLink>
        <NavLink to='/photos'  activeClassName={s.active}><img className={s.icon} src={photos}    alt='^__^'/>  Фотографии    </NavLink>
        <NavLink to='/music'   activeClassName={s.active}><img className={s.icon} src={music}     alt='^__^'/>  Музыка        </NavLink>
        <NavLink to='/videos'  activeClassName={s.active}><img className={s.icon} src={videos}    alt='^__^'/>  Видео         </NavLink>
        <NavLink to='/clips'   activeClassName={s.active}><img className={s.icon} src={clyps}     alt='^__^'/>  Клипы         </NavLink>
      </nav>
			<section className={s.ads_wrapper}>
				<div className={s.ad_container}>
					<img classname={s.ad_image} src="https://www.google.com/search?q=%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80+%D0%BA%D0%B8%D0%B1%D0%B5%D1%80%D0%BF%D0%B0%D0%BD%D0%BA%D0%B0&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjZi4X13KjuAhUOkhQKHXtfAwIQ_AUoAXoECBcQAw&biw=1920&bih=969#imgrc=c_Wr0pEbn4rXtM"alt="">
          </img>
					<h1> Киберпанк </h1>
				</div>
			</section>
		</div>
	);
};

export default Nav;
