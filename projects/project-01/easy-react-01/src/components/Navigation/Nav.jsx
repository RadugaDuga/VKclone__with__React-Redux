import  React  from 'react';
import s from './Nav.module.css';
import moya_stranica from '../../images/Nav_Images/moya_stranica.svg';
import novosti from '../../images/Nav_Images/novosti.svg';
import messenger from '../../images/Nav_Images/messenger.svg';
import druzya from '../../images/Nav_Images/druzya.svg';
import soobshestva from '../../images/Nav_Images/soobshestva.svg';
import fotografii from '../../images/Nav_Images/fotografii.svg';
import muzyka from '../../images/Nav_Images/muzyka.svg';
import video from '../../images/Nav_Images/video.svg';
import klypi from '../../images/Nav_Images/klypi.svg';
import { NavLink } from 'react-router-dom';

const Nav =(props)=> {
    return(
        <nav className={s.nav}>
          <NavLink to='/profile' activeClassName={s.active}><img src={moya_stranica}  alt='^__^'/>Моя страница  </NavLink>
          <NavLink to='/feed'    activeClassName={s.active}><img src={novosti}        alt='^__^'/>Новости       </NavLink>
          <NavLink to='/dialogs' activeClassName={s.active}><img src={messenger}      alt='^__^'/>Мессенджер    </NavLink>
          <NavLink to='/users'   activeClassName={s.active}><img src={druzya}         alt='^__^'/>Пользователи        </NavLink>
          <NavLink to='/groups'  activeClassName={s.active}><img src={soobshestva}    alt='^__^'/>Сообщества    </NavLink>
          <NavLink to='/photos'  activeClassName={s.active}><img src={fotografii}     alt='^__^'/>Фотографии    </NavLink>
          <NavLink to='/music'   activeClassName={s.active}><img src={muzyka}         alt='^__^'/>Музыка        </NavLink>
          <NavLink to='/videos'  activeClassName={s.active}><img src={video}          alt='^__^'/>Видео         </NavLink>
          <NavLink to='/clips'   activeClassName={s.active}><img src={klypi}          alt='^__^'/>Клипы         </NavLink>
        </nav>
    );
}

export default Nav;