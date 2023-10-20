import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://dummyjson.com",
  timeout: 3000,
});

export const axiosInstancePost = axios.create({
  baseURL: "https://dummyjson.com/posts",
  timeout: 3000,
});

export const axiosInstanceProductService = axios.create({
  baseURL: "https://localhost:3001",
  timeout: 3000,
});

export default axiosInstance;
