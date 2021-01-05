import axios from "axios";
import { showLoading, hideLoading } from "../utils/loading";

const devPath = "https://127.0.0.1:9999";
const productionPath = "http://127.0.0.1:9999";

const service = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? devPath : productionPath,
  timeout: 10000,
});

service.interceptors.request.use(
  function (config) {
    // Toast.showLoadding("加载中...");
    showLoading();
    return config;
  },
  function (error) {
    hideLoading();
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // Toast.hideLoadding();
    hideLoading();
    console.log("???")
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    hideLoading();
    return Promise.reject(error);
  }
);

export default function request(url, type = "get", data = {}, params = {}) {
  return new Promise((resolve, reject) => {
    const options = { url, type, data, params };
    service(options)
      .then((response) => {
        if (response.status === "200") {
          resolve(response);
        } else {
          console.error(response);
          reject(response);
        }
      })
      .catch((response) => {
        reject(response);
      });
    resolve();
  });
}
