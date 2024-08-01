import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://deployment.api-php.boilerplate.hng.tech",
  headers: {
    Accept: "application/json",
  },
});
