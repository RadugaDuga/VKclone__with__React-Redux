import  React  from 'react';
import s from './Nav.module.css';
import profile from '../../images/Nav_Images/profile.svg';
import news from '../../images/Nav_Images/news.svg';
import messenger from '../../images/Nav_Images/messenger.svg';
import friends from '../../images/Nav_Images/friends.svg';
import groups from '../../images/Nav_Images/groups.svg';
import photos from '../../images/Nav_Images/photos.svg';
import music from '../../images/Nav_Images/music.svg';
import videos from '../../images/Nav_Images/videos.svg';
import clyps from '../../images/Nav_Images/clyps.svg';
import { NavLink } from 'react-router-dom';

const Nav =(props)=> {
    return(
        <nav className={s.nav}>
          <NavLink to='/profile' activeClassName={s.active}><img className={s.icon} src={profile}   alt='^__^'/>Моя страница </NavLink>
          <NavLink to='/feed'    activeClassName={s.active}><img className={s.icon} src={news}      alt='^__^'/>Новости       </NavLink>
          <NavLink to='/dialogs' activeClassName={s.active}><img className={s.icon} src={messenger} alt='^__^'/>Мессенджер    </NavLink>
          <NavLink to='/users'   activeClassName={s.active}><img className={s.icon} src={friends}   alt='^__^'/>Друзья  </NavLink>
          <NavLink to='/groups'  activeClassName={s.active}><img className={s.icon} src={groups}    alt='^__^'/>Сообщества    </NavLink>
          <NavLink to='/photos'  activeClassName={s.active}><img className={s.icon} src={photos}    alt='^__^'/>Фотографии    </NavLink>
          <NavLink to='/music'   activeClassName={s.active}><img className={s.icon} src={music}     alt='^__^'/>Музыка        </NavLink>
          <NavLink to='/videos'  activeClassName={s.active}><img className={s.icon} src={videos}     alt='^__^'/>Видео         </NavLink>
          <NavLink to='/clips'   activeClassName={s.active}><img className={s.icon} src={clyps}     alt='^__^'/>Клипы         </NavLink>
        </nav>
    );
}

export default Nav;