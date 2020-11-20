const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"



let initialState = {
	users: [
		{
			id: 1,
			followed:true,
			fullName: "Georgi",
			status: "pasosi",
			location: {
				city: Novosibirsk,
				country: Russia,
			}
		},
		{
			id: 2,
			followed:true,
			fullName: "Elene",
			status: "loliki",
			location: {
				city: Novosibirsk,
				country: Russia,
			}
		},
		{
			id: 3,
			followed:true,
			fullName: "Georgi",
			status: "troliki",
			location: {
				city: Novosibirsk,
				country: Russia,
			}
		},
		{
			id: 4,
			followed:true,
			fullName: "Ika",
			status: "kaka",
			location: {
				city: Novosibirsk,
				country: Russia,
			}
		}
	]
};

export const UsersReducer = (state = initialState, action) => {

	switch (action.type) {


		case FOLLOW:
			return{
				...state, 
				users: state.users.map(u => {
					
					if (u.id === action.userID){
						return {...u, followed: true}
					}
					return u;
				} )
			}

		case UNFOLLOW:
			return{
				...state, 
				users: state.users.map(u => {
					
					if (u.id === action.userID){
						return {...u, followed: false}
					}
					return u;
				} )
			}

		case SET_USERS:{
			return {
				...state, 
				users: [...state.users, ...action.users]
			}
		}


		default:
			return state;
	}

};

export const follow_AC = (userID)=> ({type: FOLLOW, userID })
export const unfollow_AC = (userID)=> ({type: UNFOLLOW, userID })
export const setUsers = (users)=> ({type: SET_USERS, users })

export default usersReducer;
