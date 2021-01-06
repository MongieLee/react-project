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
    showLoading();
    return config;
  },
  function (error) {
    hideLoading();
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    hideLoading();
    return Promise.resolve(response);
  },
  function (error) {
    hideLoading();
    return Promise.reject(error);
  }
);

export default function request(url, type = "get", data = {}, params = {}) {
  return new Promise((resolve, reject) => {
    const options = { url, type, data, params };
    service(options)
      .then((response) => {
        if (response.status === 200) {
          resolve(response);
        } else {
          console.error(response);
          reject(response);
        }
      })
      .catch((response) => {
        reject(response);
      });
  });
}
