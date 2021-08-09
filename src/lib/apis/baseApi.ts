import axios from "axios";

const host = process.env.API_SERVER;

const axiosInstance = axios.create({
  baseURL: host + "/api/v1",
});

export default axiosInstance;
