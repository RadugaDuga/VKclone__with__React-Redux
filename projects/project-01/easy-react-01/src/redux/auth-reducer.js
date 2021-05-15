import { stopSubmit } from "redux-form";
import { authAPI } from "./../API/api";
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
			};

		default:
			return state;
	}
};

export const setAuthUserData = (id, email, login, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	data: { id, email, login, isAuth },
});

export const authMe = () => (dispatch) => {
	//Так как у нас есть промисы - после диспатча он вернет нам этот же then 
	return	authAPI.getMe().then( response  => {
				if (response.data.resultCode === 0) {
					let { id, login, email, isAuth } = response.data.data;
					dispatch(setAuthUserData(id, email, login, true));
				}
			});

};

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(authMe());
		} else {
			let action = stopSubmit("login", {
				_error: "Вы ввели неверный логин или пароль",
			});
			dispatch(action);
		}
	});
};

export const logout = () => (dispatch) => {
	authAPI.logout().then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	});
};

export default authReducer;
