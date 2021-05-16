export const getUsers = (state) =>{
    return state.usersPage.users
}

export const getPageSize = (state) =>{
    return state.usersPage.pageSize
}

export const getUsersTotalCount = (state) =>{
    return state.usersPage.usersTotalCount
}

export const getCurrentPageNum = (state) =>{
    return state.usersPage.currentPageNum
}

export const getFollowingProgress = (state) =>{
    return state.usersPage.followingProgress
}




