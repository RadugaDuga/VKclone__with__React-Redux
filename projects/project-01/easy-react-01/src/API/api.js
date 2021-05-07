import  axios  from "axios";


const instanse = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY": "7fc96318-cc16-423f-b993-464136a7cea1"
    }
})


// usersAPI — обьект с методами для работы с юзерами
export const usersAPI = {

    getUsersData(currentPageNum = 1, pageSize = 8) {
        return instanse.get(`users?page=${currentPageNum}&count=${pageSize}`,
        {
            withCredentials:true
        })
        .then( response => response.data )
    }

}
