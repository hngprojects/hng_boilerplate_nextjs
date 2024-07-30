// config/axiosConfig.ts

import axios from "axios";

// Base URL for your API
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

// Create an axios instance with default settings
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request and response interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Optionally add authorization tokens or modify request config here
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Optionally process response data here
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
