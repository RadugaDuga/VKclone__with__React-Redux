import  axios  from "axios";

// Инстанс для предотвращения дублирования кода
const instanse = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY": "9ddd596c-0697-4c43-9848-5d3b04dad8f5"
    }
})


// обьект с методами для работы с пользователями
export const usersAPI = {

    getUsersData(currentPageNum = 1, pageSize = 8) {
        return instanse.get(`users?page=${currentPageNum}&count=${pageSize}`)
        .then( response => response.data )
    },

    follow(userID){
        return instanse.post(`follow/${userID}`)
    },

    unfollow(userID){
        return instanse.delete(`follow/${userID}`)
    },


}


// обьект с методами для работы с авторизацией
export const authAPI = {

    getMe(){
        return instanse.get(`auth/me`)
    }

}


// обьект с методами для работы с профилем
export const profileAPI = {
    getProfile(userId){
        return instanse.get('profile/' + userId)
    }
}