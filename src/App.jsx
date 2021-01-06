import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import RouterNav from './components/RouterNav'
import request from './api/request'
import { updateUser } from './redux/actions'
const { log } = console

// const initialization = {
//   userName: "???",
//   age: null,
//   phone: null,
// };

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

function App(props) {
  const [res, setRes] = useState(null)

  useEffect(() => {
    getMock()
  }, [])

  const getMock = async () => {
    const res = await request('/user/mock')
    setRes(res.data.dataSource)
  }

  // const dispatchCity = () => {
  //   store.dispatch(updateUser({ userName: 'hiuguen' }))
  // }
  return (
    <Router>
      <RouterNav />
      <button onClick={getMock}>点我mock</button>
      <button onClick={() => props.updateUser({ userName: 'fuck' })}>点我dispatch</button>
      {/* {res} */}
      {JSON.stringify(props)}
      {
        res && res.map(e => <div key={e.key}>{e.mockAction}</div>)
      }
      <Suspense fallback={<div>loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </Router>
  );
}

const mapStateToProps = state => {
  return state.user
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
