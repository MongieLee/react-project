import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";

import logger from "redux-logger";

console.log("reducer", reducer);

const store = createStore(reducer, applyMiddleware(logger));
export default store;
