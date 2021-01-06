import { combineReducers } from "redux";
import user from "./user";
import city from "./city";
const reducer = combineReducers({ user, city });
console.log(reducer);

export default reducer;
