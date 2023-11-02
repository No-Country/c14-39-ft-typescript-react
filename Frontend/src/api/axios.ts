import axios from 'axios'
import { API_URL } from '../data/consts'

const instance = axios.create({
  baseURL: API_URL.BASE_URL,
  withCredentials: true,
})

export default instance
