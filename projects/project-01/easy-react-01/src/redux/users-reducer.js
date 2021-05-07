const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
	users: [
		
	],
	pageSize: 8,
	usersTotalCount: 0,
	currentPageNum: 1,
	followingProgress: false
};

export const usersReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userID) {
						console.log('okay');
						return { ...u, followed: true };
						
					}
					return u;
				}),
			};

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userID) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};

		case SET_USERS: {
			return {
				...state,
				users: [ ...action.users],
			};
		}

		case SET_CURRENT_PAGE :{
			return{
				...state, currentPageNum: action.currentPageNum
			}
		}

		case SET_USERS_TOTAL_COUNT :{
			return{
				...state, usersTotalCount: action.totalCount
			}
		}

		case TOGGLE_IS_FETCHING :{
			return{...state, isFetching : action.isFetching}
		}

		case TOGGLE_FOLLOWING_IN_PROGRESS :{
			return{...state, followingProgress : action.progress}
		}

		default:
			return state;
	}
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPageNum = (currentPageNum) => ({ type: SET_CURRENT_PAGE, currentPageNum  });
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching)=> ({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (progress)=> ({type:TOGGLE_FOLLOWING_IN_PROGRESS, progress});

export default usersReducer;








// {
// 	id: 1,
// 	followed: true,
// 	image:
// 		"https://sun1-26.userapi.com/impg/TB5g9PoH7wS6bXoqQsacGmamZk1TX4UoRp_ejg/k6pWeNLIs_0.jpg?size=100x0&quality=88&crop=1,1,373,373&sign=8fd7f3cb5b50f0598a51dc328149924e&ava=1",
// 	name: "Александр Семченко",
// 	status: "Всероссийский детский центр «Океан» (ВДЦ)",
// 	location: {
// 		country: "Россия",
// 		city: "Новосибирск",
// 	},
// },
// {
// 	id: 2,
// 	followed: false,
// 	image:
// 		"https://sun1-24.userapi.com/impf/c855032/v855032159/15de93/gWW9WyCjoAo.jpg?size=100x0&quality=88&crop=0,368,1431,1431&sign=95fbfb82abf91e3999dbabeec6dc676c&ava=1",
// 	name: "Максим Андреев",
// 	status: "Я - Музыка, я - искусство",
// 	location: {
// 		country: "Россия",
// 		city: "Новосибирск",
// 	},
// },
// {
// 	id: 3,
// 	followed: true,
// 	image:
// 		"https://sun1-97.userapi.com/impf/c837737/v837737748/ca71/CX_AX8tecYE.jpg?size=100x0&quality=88&crop=71,207,1290,1290&sign=f6dea0ced357e09d9a7b0a12144bd265&ava=1",
// 	name: "Александр Соломка",
// 	status: "Пишу клео для SAMP'ов",
// 	location: {
// 		country: "Россия",
// 		city: "Новосибирск",
// 	},
// },
// {
// 	id: 4,
// 	followed: true,
// 	image:
// 		"https://sun1-26.userapi.com/impf/c830208/v830208828/164fa8/dnnMtq8Jn3A.jpg?size=100x0&quality=88&crop=67,294,512,512&sign=c194015365e0093f92f53b7c27db3906&ava=1",
// 	name: "Юля Линник",
// 	status: "СИУ РАНХиГС (СибАГС)",
// 	location: {
// 		country: "Россия",
// 		city: "Новосибирск",
// 	},
// },
// {
// 	id: 5,
// 	followed: false,
// 	image:
// 		"https://sun9-39.userapi.com/impg/s-jhqVzrmj1fOyS1E5aqdisOXc62J2FWbeOhxQ/NrapJ-LfY7s.jpg?size=100x0&quality=88&crop=785,271,736,736&sign=723f3020b0e6c1715221438d6b3efe54&ava=1",
// 	name: "Макар Андреев",
// 	status: "НГУ",
// 	location: {
// 		country: "Россия",
// 		city: "Новосибирск",
// 	},
// },
// {
// 	id: 6,
// 	followed: true,
// 	image:
// 		"https://sun9-49.userapi.com/impf/c841221/v841221285/3e224/u0Qr78nZdXY.jpg?size=100x0&quality=88&crop=0,0,2047,2047&sign=7c142b84edf1c11856fcb90275dcd947&ava=1",
// 	name: "Ибоян Эдгар",
// 	status: "НГУЭУ",
// 	location: {
// 		country: "Россия",
// 		city: "Новосибирск",
// 	},
// },
// {
// 	id: 7,
// 	followed: true,
// 	image:
// 		"https://sun9-49.userapi.com/impg/96L18OLgBgNK74gW5IEvY8JUc_1cli8cX5sbsg/lIB5Cg_V-Mg.jpg?size=100x0&quality=88&crop=237,95,950,950&sign=0bb366926ba5a88848846fd895998aea&ava=1",
// 	name: "Данил Пизулин",
// 	status: "Я не хочу сказать, что ты похож на пидора, бля, но, говорю",
// 	location: {
// 		country: "Россия",
// 		city: "Новосибирск",
// 	},
// },