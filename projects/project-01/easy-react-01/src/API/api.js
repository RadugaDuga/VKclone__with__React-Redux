import  axios  from "axios";


const instanse = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY": "6224479f-d003-4fda-bd6a-66fd9c9741ce"
    }
})


// usersAPI — обьект с методами для работы с пользователями
export const usersAPI = {

    getUsersData(currentPageNum = 1, pageSize = 8) {
        return instanse.get(`users?page=${currentPageNum}&count=${pageSize}`)
        .then( response => response.data )
    },

    follow(userID){
        return axios.post(`follow/${userID}`)
    },

    unfollow(userID){
        return instanse.delete(`follow/${userID}`)
    }

}

