import axios, { AxiosInstance } from "axios";

const Calls = (baseURL?: string, token?: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      // accept token if its a protected route/endpoint
      Authorization: token ? `Bearer ${token}` : undefined,
      credentials: "include",
    },
  });
};

export default Calls;
