import React from "react";
import s from "./ProfileDataForm.module.css";
import { Field, reduxForm } from "redux-form";


const ProfileDataForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.form}>
			{props.error && <div>{props.error}</div> }
            <div className={s.info_block}>
                <p className={s.info_subtitle}>Мое имя:</p> 
                <Field
                    component={"input"}
                    name="fullName"
                    placeholder={"Ваше имя"}
                    className={s.input_box}
                    autoFocus={true}
			    />
            </div>

            <div className={s.info_block}>
                <p className={s.info_subtitle}>Я ищу работу:</p> 
                <Field
                    component={"input"}
                    name="lookingForAJob"
                    type="checkbox"
                    className={s.input_box}

			    />
            </div>

            <div className={s.info_block}>
                <p className={s.info_subtitle}>Описание моих скиллов:</p> 
                <Field
                    component={"textarea"}
                    name="lookingForAJobDescription"
                    placeholder={"Какую работу я ищу"}
                    className={s.input_box}

			    />
            </div>

            <div className={s.info_block}>
                <p className={s.info_subtitle}>Обо мне:</p> 
                <Field
                    component={"textarea"}
                    name="aboutMe"
                    placeholder={"Расскажите о себе"}
                    className={s.input_box}

			    />
            </div>
            
            
            
            
            {Object.keys(props.profile.contacts).map(key => {
                return  <div key={key} className={s.info_block}>
                            <p className={s.info_subtitle}>{key?key[0].toUpperCase() + key.slice(1) : null}:</p>
                            <Field
                                component={"input"}
                                name={"contacts." + key}
                                className={s.input_box}
                                
                            />
                        </div>
			})}


			<button className={s.button}>Сохранить</button>
		</form>
	);
};

const ProfileDataRedux = reduxForm({ form: "profileData" })(ProfileDataForm);

export default ProfileDataRedux