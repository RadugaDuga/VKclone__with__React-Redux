import { profileAPI } from "../API/api";
import { stopSubmit } from 'redux-form';
import { authMe } from "./auth-reducer";

const ADD_POST = "profile/ADD_POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE_NEW_POST_TEXT";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";
const SAVE_PROFILE_DATA_SUCCESS = "profile/SAVE_PROFILE_DATA_SUCCESS";

let initialState = {
	postsData: [
		{
			postId: 1,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: `Мария Кюри изобрела теорию радиоактивности, лечение радиоактивности и смерть от радиоактивности.`,
			likes_count: 7,
			comments_count: "",
			repost_count: "2",
			views_count: "41",
			date: "18 ноя 2020",
		},

		{
			postId: 2,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "До изобретения аэроплана братьями Райт, те, кто желал летать, должны были проглотить 200 фунтов гелия.",
			likes_count: "71",
			repost_count: "32",
			views_count: "251",
			date: "4 сен 2020",
		},

		{
			postId: 3,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "Парадокс кота Шрёдингера описывает ситуацию, в которой кот в ящике должен, во всех отношениях, рассматриваться как одновременно живой и мёртвый. Шрёдингер придумал этот парадокс, как оправдание для убийства котов.",
			likes_count: "16",
			repost_count: "8",
			views_count: "63",
			date: "4 сен 2020",
		},

		{
			postId: 4,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "В викторианской Англии, незнатный человек не имел права смотреть прямо на королеву, так как считалось, что бедняки могут украсть мысли. Сегодня наука доказала, что лишь менее 4% бедняков на это способны.",
			likes_count: "27",
			repost_count: "1",
			views_count: "93",
			date: "7 сен 2020",
		},

		{
			postId: 5,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "Сны - это способ подсознания напомнить человеку, что ему нужно прийти в школу голышом и лишиться зубов.",
			likes_count: "16",
			repost_count: "7",
			views_count: "68",
			date: "21 сен 2020",
		},
	],
	profile: {
		photos: {
			large:null,
			small:null
		}
	},
	status: "",
};



let today = new Date();
const dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const yyyy = today.getFullYear();
const mm = today.toLocaleString('default', { month: 'short' })
today = `${dd} ${mm} ${yyyy}`



const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postsData: [
					{
						postId: Math.random(2, 99999999999999999),
						name: "Георгий Букиа",
						image: state.profile.photos.large,
						text: action.postText,
						likes_count: Math.floor(Math.random() * 20),
						comments_count: Math.floor(Math.random() * 10),
						repost_count: Math.floor(Math.random() * 98) ,
						views_count: Math.floor(Math.random() * 98) ,
						date: today
					},
					...state.postsData,
				],
				newPostText: "",
			};

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.text,
			};

		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter( p => p.postId !== action.postId),
			};
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}

		case SET_STATUS: {
			return { ...state, status: action.status };
		}

		case SAVE_PHOTO_SUCCESS: {
			return { ...state, profile: { ...state.profile, photos: action.photos } };
		}
		
		case SAVE_PROFILE_DATA_SUCCESS: {
			return { ...state, profile: { ...state.profile,...action.profile } };
		}

		default:
			return state;
	}
};





// Экщн креэйторы
export const addPost = (postText) => ({ type: ADD_POST, postText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const updateNewPostText = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	text: text,
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({
	type: SAVE_PHOTO_SUCCESS,
	photos:photos
});
export const saveProfileDataSuccess = (formData) => ({
	type: SAVE_PROFILE_DATA_SUCCESS,
	formData
});






//Санки
export const getUserProfile = (userId) => async (dispatch) => {
	let response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const savePhoto = (photo) => async (dispatch) => {
	let response = await profileAPI.savePhoto(photo);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
		dispatch(authMe())
	}
};




export const saveProfileData = (formData) => async (dispatch, getState) => {
	let response = await profileAPI.saveProfileData(formData);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(getState().auth.id));
	} else {
		
		dispatch(stopSubmit("profileData", {_error:response.data.messages[0]}));
		return Promise.reject(response.data.messages[0])
	}
};

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};


export default profileReducer;
