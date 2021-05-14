import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControl/FormControl";
import { maxLengthCreator, required } from './../../redux/Utilites/Validators/Validator';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";


const maxLoginLength = maxLengthCreator(20)
const maxPasswordLength = maxLengthCreator(16)
const LoginForm = (props) => {
	

	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<span>
				<Field
					validate={[required,maxLoginLength]}
					className={s.field_login}
					placeholder={"Ваше имя"}
					component={Input}
					name={"email"}
				/>
			</span>
			<span>
				<Field
					validate={[required, maxPasswordLength]}
					name={"password"}
					className={s.field_login}
					placeholder={"Ваш пароль"}
					component={Input}
				/>
			</span>
			
				<span>
					<button className={s.submit_btn}>Войти</button>
				</span>
				<span className={s.checkbox}>
					<Field name={"rememberMe"} type={"checkbox"} component={"input"} />
					Запомнить меня
				</span>
			
		</form>
	);
};

// compose(
//     ReduxForm({form:'login'})
// )(LoginForm)

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);


const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	};

	if (props.isAuth){
		return <Redirect to={'/profile'}/>
	}

	return (
		<div className={s.joinBox}>
			<div information={s.information}>
				<h1 className={s.h1}>Впервые ВКладовке?</h1>
				<h3 className={s.h3}>Моментальная регистрация</h3>
			</div>
			<ReduxLoginForm onSubmit={onSubmit} />
		</div>
		
	);
};

const mapStateToProps =(state)=>({
	isAuth:state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
