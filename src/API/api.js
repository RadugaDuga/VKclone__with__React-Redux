import  axios  from "axios";

// Инстанс для предотвращения дублирования кода
const instanse = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY": "57002d0a-9032-4b4a-bba7-bc2cabbf5e08"
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
        return instanse.get(`auth/me`);
    },

    login(email, password, rememberMe=false){
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },

    logout(){
        return instanse.delete(`auth/login`);
    }

}


// обьект с методами для работы с профилем
export const profileAPI = {

    getProfile(userId){
        return instanse.get('profile/' + userId)
    },

    getStatus(userId){
        return instanse.get(`profile/status/` + userId)
    },

    updateStatus(status){
        return instanse.put(`profile/status/`, {status:status})
    },

    savePhoto(photo){
        const formData = new FormData();
        formData.append("image", photo)
        return instanse.put(`/profile/photo`, formData,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
    }

}