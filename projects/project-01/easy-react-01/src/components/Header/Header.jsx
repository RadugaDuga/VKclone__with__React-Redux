import  React  from 'react';
import s from './Header.module.css';
import logo from '../../images/vk2.svg';
import { NavLink } from 'react-router-dom';

const Header =()=> {
    return(
        <header className={s.header}>
            <img src={logo} alt=""/>
            <input className={s.search} placeholder="Поиск"  />
            <button className={s.notify_btn}></button>
            <button className={s.music_btn}></button>
            <div className={s.loginBlock}>
                <NavLink className = {s.link} to = {'/login'}>Вход</NavLink>
            </div>
        </header >
    );
}

export default Header;