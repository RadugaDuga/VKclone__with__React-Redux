
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import groupsReducer from './groups-reducer';
import usersReducer from './users-reducer';
const { createStore, combineReducers } = require("redux");

let reducersComplex = combineReducers({
    profilePage  : profileReducer,
    messagesPage : messagesReducer,
    groupsPage   : groupsReducer,
    usersPage    : usersReducer
});


let store = createStore(reducersComplex);

window.store = store;

export default store;