import  React  from 'react';
import s from './Nav.module.css';
import moya_stranica from '../../images/moya_stranica.svg';
import novosti from '../../images/novosti.svg';
import messenger from '../../images/messenger.svg';
import druzya from '../../images/druzya.svg';
import soobshestva from '../../images/soobshestva.svg';
import fotografii from '../../images/fotografii.svg';
import muzyka from '../../images/muzyka.svg';
import video from '../../images/video.svg';
import klypi from '../../images/klypi.svg';
import { NavLink } from 'react-router-dom';

const Nav =(props)=> {
    return(
        <nav className={s.nav}>
          <NavLink to='/Profile' activeClassName={s.active_link}><img src={moya_stranica} alt='Error 404'/>Моя страница</NavLink>
          <NavLink to='/Feed' activeClassName={s.active_link}><img src={novosti} alt='Error 404'/>Новости</NavLink>
          <NavLink to='/Dialogs' activeClassName={s.active_link}><img src={messenger} alt='Error 404'/>Мессенджер</NavLink>
          <NavLink to='/Friends' activeClassName={s.active_link}><img src={druzya} alt='Error 404'/>Друзья</NavLink>
          <NavLink to='/Groups' activeClassName={s.active_link}><img src={soobshestva} alt='Error 404'/>Сообщества</NavLink>
          <NavLink to='/Photos' activeClassName={s.active_link}><img src={fotografii} alt='Error 404'/>Фотографии</NavLink>
          <NavLink to='/Music' activeClassName={s.active_link}><img src={muzyka} alt='Error 404'/>Музыка</NavLink>
          <NavLink to='/Vedios' activeClassName={s.active_link}><img src={video} alt='Error 404'/>Видео</NavLink>
          <NavLink to='/TikTok' activeClassName={s.active_link}><img src={klypi} alt='Error 404'/>Клипы</NavLink>
      </nav>
    );
}

export default Nav;