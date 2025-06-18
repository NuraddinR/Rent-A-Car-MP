import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL
  ? import.meta.env.VITE_APP_API_BASE_URL
  : "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
