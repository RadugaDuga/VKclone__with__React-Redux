import  React  from 'react';
import s from './Header.module.css';
import logo from '../../images/vk.svg';

const Header =()=> {
    return(
        <header className={s.header}>
            <img src={logo} alt='Error 404'/>
        </header >
    );
}

export default Header;