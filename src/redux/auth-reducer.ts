import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, securityAPI } from "../API/api";


const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const SET_AUTH_USER_PHOTO = "auth/SET_AUTH_USER_PHOTO";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";



let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: null as boolean | null,
  authUserPhoto: null as string | null,
  captchaURL: null as string | null,
};

export const authReducer = (state = initialState,action: any) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_AUTH_USER_PHOTO:
      return {
        ...state,
        authUserPhoto: action.photo,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaURL: action.captchaUrl,
      };

    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | null;
};
type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA;
  data: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (id: number | null,email: string | null,login: string | null,isAuth: boolean | null): SetAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login, isAuth }
});




export const setAuthUserPhoto = (photo: string | null) => ({
  type: SET_AUTH_USER_PHOTO,
  photo,
});


type GetCaptchaURLSuccessActionType = {
	type : typeof GET_CAPTCHA_URL_SUCCESS
	captchaUrl : string 
}

export const getCaptchaURLSuccess = (captchaUrl: string): GetCaptchaURLSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl
});

export const authMe = () => async (dispatch: any, getState: any) => {
  //Так как у нас есть промисы - после диспатча он вернет нам этот же then
  let response = await authAPI.getMe();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data; // isAuth убран отсюда
    dispatch(setAuthUserData(id, email, login, true));
    const authProfile = await profileAPI.getProfile(getState().auth.id);
    dispatch(setAuthUserPhoto(authProfile.data.photos.small));
  }
};

export const getCaptchaURL = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaURL();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaURLSuccess(captchaUrl));
};

export const login = (email: any, password: any, rememberMe: any, captchaUrl: any) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captchaUrl);

    if (response.data.resultCode === 0) {
      dispatch(authMe());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaURL());
      }
      let action = stopSubmit("login", {
        _error: "Вы ввели неверный логин или пароль",
      });
      dispatch(action);
    }
  };

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
