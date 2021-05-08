
import { usersAPI } from './../API/api';
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

 
 let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    photo: null
}

export const authReducer = (state = initialState, action)=>{
    
    switch(action.type){
        
        case SET_AUTH_USER_DATA:
            
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:  return state;
    }

}

export const setAuthUserData = (id, login, email) => ({
	type: SET_AUTH_USER_DATA,
	data:{id, login, email}
});

export const getMe = () => {

	return (dispatch) => {
		usersAPI.getMe()
			.then((response) => {
				if (response.data.resultCode === 0) {
					let { id, login, email } = response.data.data;
					dispatch(setAuthUserData(id, login, email));
				}
			});
	}	

}



export default authReducer;