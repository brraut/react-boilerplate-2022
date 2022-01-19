import axios from "axios";
import { decodeJwt } from "../utils/decodeJwt";
import { apiConstant } from "./apiConstant";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log(error, "error");
        // AppUtils.removeUserRef();
        // window.location.href = "/";
      }
      throw error;
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
