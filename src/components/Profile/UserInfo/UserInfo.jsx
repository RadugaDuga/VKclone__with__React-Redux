import React , {useState} from "react";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import s from "./UserInfo.module.css";

const UserInfo = (props) => {

	const [moreInfo, setMoreInfo] = useState(false)
	const toggleMoreInfo = (e) => {

		e.target.innerHTML === "Показать подробную информацию"
			? e.target.innerHTML = "Скрыть подробную информацию" 
			: e.target.innerHTML = "Показать подробную информацию" 
		
		moreInfo ? setMoreInfo(false): setMoreInfo(true)
	}

	return (
		<div className={s.container}>
			<div className={s.info_wrapper}>
				<div className={s.user_name}>
					<p>  	{props.profile.fullName}     <span className={s.status}>online</span></p>
					<div className={s.status_wrapper}>
						<ProfileStatusWithHooks/>
					</div>
				</div>

				<div className={s.about_user_global_wrapper}>	
					<div className={s.info_block}>
						<p className={s.info_subtitle}>День рождения:</p> 
						26 августа
					</div>
					<div className={s.info_block}>
						<p className={s.info_subtitle}>Город:</p> 
						Новосибирск 
					</div>
					<div className={s.info_block}>
						<p className={s.info_subtitle}>Семейное положение:</p> 
						влюблен 
					</div>
					<button onClick={(e)=>{toggleMoreInfo(e)}} className={s.more_button}>Показать подробную информацию</button>
				</div>

				{ moreInfo ? <AboutUser profile={props.profile}/> : null}
			</div>
			<div className={s.user_stats}>
				<p>54<span>друзей</span></p>
				<p>38<span>подписчиков</span></p>
				<p>4<span>фотографии</span></p>
				<p>2<span>отметки</span></p>
				<p>36<span>видеозаписей</span></p>
			</div>
		</div>
	);
};


const AboutUser = (props) => {
	
	return (
		<>
			<div className={s.about_user_section}>
				<div className={s.title_line_wrapper}><h5 className={s.about_title}>Основная информация</h5><div className={s.line}></div></div>
				{Object.keys(props.profile.contacts).map(key => {
					return <Contact key={key} title={key} value={props.profile.contacts[key]}/>
				})}
			</div>

			<div className={s.about_user_section}>
				<div className={s.title_line_wrapper}><h5 className={s.about_title}>Основная информация</h5><div className={s.line}></div></div>
				{Object.keys(props.profile.contacts).map(key => {
					return <Contact key={key} title={key} value={props.profile.contacts[key]}/>
				})}
			</div>
		</>
	)
}
	



const Contact = ({ title, value }) => {
	return (
		<div className={s.info_block}>
			<p className={s.info_subtitle}>{title}:</p>
			{value}
		</div>
	);
};

export default UserInfo;


// Георгий Букиа <span>&#128123;</span> 