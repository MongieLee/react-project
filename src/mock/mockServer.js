const express = require("express");
const Mock = require("mockjs");

const server = express();
server.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

server.use("/user/mock", (request, response) => {
  response.json(
    Mock.mock({
      status: 200,
      "dataSource|1-9": [
        {
          "key|+1": 1,
          "mockTitle|1": ["肆无忌惮"],
          "mockContent|1": [
            "角色精湛主题略荒诞",
            "理由太短 是让人不安",
            "疑信参半 却无比期盼",
            "你的惯犯 圆满",
            "别让纠缠 显得 孤单",
          ],
          "mockAction|1": ["下载", "试听", "喜欢"],
        },
      ],
    })
  );
});

server.listen("9999", () => {
  console.log("监听端口9999");
});
