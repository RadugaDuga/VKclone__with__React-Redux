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

const Nav =()=> {
    return(
        <nav className={s.nav}>
        <div>
          <NavLink to='/Profile' activeClassName={s.active_link}><img src={moya_stranica}/>Моя страница</NavLink>
        </div>
        <div>
        <a href='#'><img src={novosti}/>Новости</a>
        </div>
        <div>
          <NavLink to ='/Dialogs' activeClassName={s.active_link}><img src={messenger}/>Мессенджер</NavLink>
        </div>
        <div>
          <a href='#'><img src={druzya}/>Друзья</a>
        </div>
        <div>
          <a href='#'><img src={soobshestva}/>Сообщества</a>
        </div>
        <div>
          <a href='#'><img src={fotografii}/>Фотографии</a>
        </div>
        <div>
          <a href='#'><img src={muzyka}/>Музыка</a>
        </div>
        <div>
          <a href='#'><img src={video}/>Видео</a>
        </div>
        <div>
          <a href='#'><img src={klypi}/>Клипы</a>
        </div>
        
      </nav>
    );
}

export default Nav;