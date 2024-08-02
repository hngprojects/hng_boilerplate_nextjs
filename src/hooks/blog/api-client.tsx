import axios from "axios";

export const apiClient = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
  },
});
