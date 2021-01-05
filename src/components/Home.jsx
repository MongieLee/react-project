import React, {
  useState,
  useEffect,
  useMemo,
  useReducer,
  useCallback,
} from "react";
import { connect } from "react-redux";
const ajax = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "limengjie",
        age: 12,
        addr: "珠海市",
      });
    }, 500);
  });
};

function Home(props) {
  useEffect(() => {
    ajax().then((e) => {
      console.log(e);
      console.log("props", props);
      // dispatch({ type: "setUser", user: e.name });
    });
  }, []);
  const handleChangeNmae = () => {
    props.dispatch({ type: "UPDATE_USERNAME", userName: "limengjie" });
  };
  return (
    <div>
      {/* {JSON.stringify(state)} */}
      {JSON.stringify(props)}
      <button onClick={handleChangeNmae}>点击设置用户</button>
    </div>
  );
}

export default connect((state) => {
  return { count: state.userName };
})(Home);
