import React from "react";
import s from "./ProfileDataForm.module.css";
import { Field, reduxForm } from "redux-form";


const ProfileDataForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.form}>
			

            <div className={s.info_block}>
                <p className={s.info_subtitle}>День рождения:</p> 
                <Field
                    component={"textarea"}
                    name="birthDay"
                    className={s.textarea}
                    autoFocus={true}
                    placeholder={"Что у вас нового"}
			    />
            </div>

			<button className={s.button}>Сохранить</button>
		</form>
	);
};

const ProfileDataRedux = reduxForm({ form: "profileData" })(ProfileDataForm);

export default ProfileDataRedux