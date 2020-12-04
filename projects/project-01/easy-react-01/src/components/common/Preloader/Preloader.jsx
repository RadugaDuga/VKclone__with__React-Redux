import preloader from '../../../images/Common/preloader.svg';
import  React from 'react';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.background}>
        <img className={s.spinner} src={preloader} alt=""/>
    </div>
}

export default Preloader;