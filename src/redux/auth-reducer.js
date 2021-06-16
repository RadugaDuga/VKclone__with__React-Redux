import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "./../API/api";






const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const SET_AUTH_USER_PHOTO = "auth/SET_AUTH_USER_PHOTO";


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: null,
	authUserPhoto: null
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

export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe);
	
	if (response.data.resultCode === 0) {
		dispatch(authMe());
	} else {
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
