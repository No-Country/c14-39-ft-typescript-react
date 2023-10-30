import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.reservatucancha.vercel.app/api',
  withCredentials: true,
})

export default instance
