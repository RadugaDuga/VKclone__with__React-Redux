import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, securityAPI } from "./../API/api";







const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const SET_AUTH_USER_PHOTO = "auth/SET_AUTH_USER_PHOTO";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: null,
	authUserPhoto: null,
	captchaURL: null
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
			};
		case SET_AUTH_USER_PHOTO:
			return {
				...state,
				authUserPhoto: action.photo
			};
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				captchaURL: action.captcha
			};

		default:
			return state;
	}
};







export const setAuthUserData = (id, email, login, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	data: { id, email, login, isAuth },
});
export const setAuthUserPhoto = (photo) => ({
	type: SET_AUTH_USER_PHOTO,
	photo
});
export const getCaptchaURLSuccess = (captcha) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	captcha
});


export const authMe = () => async (dispatch,getState) => {
	//Так как у нас есть промисы - после диспатча он вернет нам этот же then
	let response = await authAPI.getMe();
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data;             // isAuth убран отсюда 
		dispatch(setAuthUserData(id, email, login, true));
		const authProfile = await profileAPI.getProfile(getState().auth.id);
		dispatch(setAuthUserPhoto(authProfile.data.photos.small))
	}
};

export const getCaptchaURL = () => async (dispatch) => {
	let response = await securityAPI.getCaptchaURL()
	const captcha = response.data.url ;
	dispatch(getCaptchaURLSuccess(captcha))
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe, captcha);
	
	if (response.data.resultCode === 0) {
		dispatch(authMe());
	} else {
		if (response.data.resultCode === 10){
			dispatch(getCaptchaURL())
		}
		let action = stopSubmit("login", {_error: "Вы ввели неверный логин или пароль",});
		dispatch(action);
	}
};

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};



















export default authReducer;
