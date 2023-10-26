import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://reservatucancha-5rse5st6p-reservatucancha.vercel.app/api',
  withCredentials: true,
})

export default instance
