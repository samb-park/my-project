import { combineReducers } from "redux";
import addCart from "./addCart";
import updateHeader from "./updateHeader";

const rootReducer = combineReducers({addCart,updateHeader});

export default rootReducer;