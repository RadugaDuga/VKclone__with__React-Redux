
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import groupsReducer from './groups-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
const { createStore, combineReducers } = require("redux");

let reducersComplex = combineReducers({
    profilePage  : profileReducer,
    messagesPage : messagesReducer,
    groupsPage   : groupsReducer,
    usersPage    : usersReducer,
    auth: authReducer
});


let store = createStore(reducersComplex);

window.store = store;

export default store;