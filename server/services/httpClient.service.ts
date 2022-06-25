import axios from "axios";
import environment from "../config/environment";

const { BASE_API } = environment;

const httpClient = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export { axios, httpClient };
