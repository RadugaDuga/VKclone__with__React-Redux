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
	followingProgress: []
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
				users: [ ...action.users]
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
			return{
				...state,
				 followingProgress : action.progress 
					?[...state.followingProgress, action.userID]
					:[state.followingProgress.filter(id => id!=action.uderID)]}
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
export const toggleFollowingProgress = (progress, userID)=> ({type:TOGGLE_FOLLOWING_IN_PROGRESS, progress});

export default usersReducer;

