import axios from 'axios'

export const axiosReq = axios.create({
  baseURL: 'http://localhost:1997/',
  withCredentials: true,
})
