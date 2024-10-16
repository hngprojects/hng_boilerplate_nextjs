import axios, { AxiosInstance } from 'axios'

const Calls = (baseURL?: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      credentials: 'include',
    },
  })
}

const CallsWithBearer = (
  baseURL: string,
  authorization: string
): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${authorization}`,
    },
  })
}

export { Calls, CallsWithBearer }
