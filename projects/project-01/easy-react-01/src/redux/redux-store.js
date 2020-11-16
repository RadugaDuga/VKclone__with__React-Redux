
import { profileReducer } from './profile-reducer';
import messagesReducer from './messages-reducer';
import groupsReducer from './groups-reducer';
const { createStore, combineReducers } = require("redux");

let reducersComplex = combineReducers({
    profilePage  : profileReducer,
    messagesPage : messagesReducer,
    groupsPage   : groupsReducer
});


let store = createStore(reducersComplex);

export default store;