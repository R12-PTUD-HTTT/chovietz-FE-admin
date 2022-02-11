import { combineReducers } from "redux";
import { pageReducer } from "./page/pageReducer";
import { userReducer } from "./userReducer";
const rootReducer = combineReducers({ user: userReducer, page: pageReducer });

export default rootReducer;
