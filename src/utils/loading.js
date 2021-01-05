import React from "react";
import ReactDOM from "react-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

let requestCount = 0;

const showLoading = () => {
  if (requestCount !== 0) {
    requestCount++;
    return;
  }
  const div = document.createElement("div");
  div.setAttribute("id", "lmLoading");
  document.body.appendChild(div);
  ReactDOM.render(<CircularProgress />, div);
  requestCount++;
};

const hideLoading = () => {
  console.log(`requestCount`);
  console.log(requestCount);
  requestCount--;
  console.log(requestCount);

  if (requestCount === 0) {
    console.log("irun");

    document.body.removeChild(document.querySelect("#lmLoading"));
  }
};

export { showLoading, hideLoading };
