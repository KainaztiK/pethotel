import axios from "axios";

const instance = axios.create({
  baseURL: 'http://185.139.69.220',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
