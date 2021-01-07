const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
	users: [
		{
			name: "Георгий Букиа",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-38.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=200x0&quality=96&crop=391,0,1365,1365&sign=d0f833aaff02b007925c12c1e17a8d3a&ava=1" ,
				large: null,
			},
			status: null,
			followed: false,
		},
		{
			name: "Дарья Амеличева",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-6.userapi.com/impg/kBTMqEc51V77suUcU8DXXV7NMWyz1SIXtR9acQ/cKvcJzxHqA4.jpg?size=100x0&quality=96&crop=5,4,853,853&sign=3b17f4b239b264e9522a13c5d73dd720&ava=1" ,
				large: null,
			},
			status: null,
			followed: false,
		},
		{
			name: "Александр Семченко",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-58.userapi.com/impf/c837322/v837322530/55ff9/7JsqhYlpm34.jpg?size=100x0&quality=96&crop=466,181,1259,1259&sign=d2acfd158ca0ae2c5fbb061dfc3e96d5&ava=1" ,
				large: null,
			},
			status: null,
			followed: false,
		},
		{
			name: "Даниил Пищулин",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-49.userapi.com/impg/96L18OLgBgNK74gW5IEvY8JUc_1cli8cX5sbsg/lIB5Cg_V-Mg.jpg?size=100x0&quality=96&crop=237,95,950,950&sign=6f52f99652e4e2326542843058294280&ava=1" ,
				large: null,
			},
			status: "Привет тебе их жеппы" ,
			followed: false,
		},
		{
			name: "Катерина Казакова",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-47.userapi.com/impf/c851128/v851128548/178450/P5Io0TXQRhE.jpg?size=100x0&quality=96&crop=526,75,1087,1087&sign=77d5afbcde4456d40d11cdeb18dd6b9c&ava=1" ,
				large: null,
			},
			status: null,
			followed: false,
		},
		{
			name: "Максим Андреев",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-24.userapi.com/impf/c855032/v855032159/15de93/gWW9WyCjoAo.jpg?size=100x0&quality=96&crop=0,368,1431,1431&sign=3c9ea9def21671ca53b545f00ff90056&ava=1" ,
				large: null,
			},
			status: null,
			followed: false,
		},
		{
			name: "Александр Соломахин",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-68.userapi.com/impf/c837737/v837737748/ca71/CX_AX8tecYE.jpg?size=100x0&quality=96&crop=71,207,1290,1290&sign=9ea133f5391e92c8d0832b6011563e48&ava=1" ,
				large: null,
			},
			status: null,
			followed: false,
		},
		{
			name: "Иван Токарев",
			id: 13859,
			uniqueUrlName: null,
			photos: {
				small:"https://sun9-71.userapi.com/impg/c857736/v857736275/ff93a/91y1W9Lqpc4.jpg?size=100x0&quality=96&crop=484,258,900,900&sign=6bdc500dbe4ea0275afee756b188628b&ava=1" ,
				large: null,
			},
			status: null,
			followed: false,
		},
	],
	pageSize: 8,
	usersTotalCount: 0,
	currentPageNum: 1,
	isFetching: false,
};

export const usersReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userID) {
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

		default:
			return state;
	}
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPageNum = (currentPageNum) => ({ type: SET_CURRENT_PAGE, currentPageNum  });
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching)=> ({type:TOGGLE_IS_FETCHING, isFetching})

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