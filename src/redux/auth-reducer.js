import { stopSubmit } from "redux-form";
import { authAPI } from "./../API/api";
const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: null,
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

export const authMe = () => async (dispatch) => {
	//Так как у нас есть промисы - после диспатча он вернет нам этот же then
	let response = await authAPI.getMe();
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data;             // isAuth убран отсюда 
		dispatch(setAuthUserData(id, email, login, true));
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
