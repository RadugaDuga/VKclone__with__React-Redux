import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
	postsData: [
		{
			id: 1,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text:
				"Навального вывели из комы, постепенно его отключают от ИВЛ, он реагирует на речь и обращения к нему.",
			likes_count: 7,
			comments_count: "",
			repost_count: "2",
			views_count: "631",
			date: "18 ноя 2020",
		},

		{
			id: 4,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "",
			likes_count: "92",
			repost_count: "43",
			views_count: "1001",
			date: "4 сен 2020",
		}
	],
	newPostText: "", 
	profile: null
};

export const profileReducer = (state = initialState, action) => {
	

	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postsData: [
					{
						id: 5,
						name: "Георгий Букиа",
						image:
						"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
						text: state.newPostText,
						likes_count: 7,
						comments_count: 67,
						repost_count: 2,
						views_count: 631,
						date: "18 ноя 2020"
					},
					...state.postsData
				],
				newPostText:""
			}

		case UPDATE_NEW_POST_TEXT: 
			return {
				 ...state,
				 newPostText: action.text
				};
		
		
		case DELETE_POST: {
			let stateCopy = {
				...state,
				postsData:[...state.postsData]
			}
			stateCopy.postsData.shift();
		return stateCopy;
		}

		case SET_USER_PROFILE:{
			return{...state, profile:action.profile}
		}

		default:
		return state;
	}
};


// Экщн креэйторы
export const addPost_AC = () => ({ type: ADD_POST });
export const deletePost_AC = () => ({ type: DELETE_POST });
export const updateNewPostText_AC = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	text: text
});
export const setUserProfile = (profile)=> ({type:SET_USER_PROFILE, profile})



//Санки 
export const getUserProfile = (userId) => {

	return (dispatch) => {
		profileAPI.getProfile(userId).then( response => {
			dispatch(setUserProfile(response.data));
		 })
	}

}


export default profileReducer;
