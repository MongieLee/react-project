import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import store from "./redux/store";
import { renderRoutes } from 'react-router-config'
import routes from './router'
import RouterNav from './components/RouterNav'
import request from './api/request'

const initialization = {
  userName: "???",
  age: null,
  phone: null,
};

const reducer = (state = initialization, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, userName: action.userName };
    case "UPDATE_AGE":
      return { ...state, age: action.age };
    case "UPDATE_PHONE":
      return { ...state, phone: action.phone };
    default:
      return state;
  }
};
// const reducer = (state = initialization, action) => {
//   switch (action.type) {
//     case "UPDATE_USERNAME":
//       return { ...state, userName: action.userName };
//     case "UPDATE_AGE":
//       return { ...state, age: action.age };
//     case "UPDATE_PHONE":
//       return { ...state, phone: action.phone };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
console.log("store.getState()", store.getState());

function App() {
  const [res, setRes] = useState(null)
  useEffect(() => {
    request('/user/mock').then(e => {
      console.log(e)
      setRes(e)
    })
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <RouterNav />
        {JSON.stringify(res)}
        <Suspense fallback={<div>loading...</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
