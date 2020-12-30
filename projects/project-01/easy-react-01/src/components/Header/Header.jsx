import  React  from 'react';
import s from './Header.module.css';
import logo from '../../images/vk.svg';

const Header =()=> {
    return(
        <header className={s.header}>
            <img src={logo} alt=""/>
            <input className={s.search} placeholder="Поиск"  />
            <button className={s.notify_btn}></button>
            <button className={s.music_btn}></button>
        </header >
    );
}

export default Header;