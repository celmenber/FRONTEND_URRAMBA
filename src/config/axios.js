import axios from 'axios'
import { useHistory } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL

const stringTOKEN = localStorage.getItem('currentUser') ? localStorage.getItem('token') : ''

const TOKEN = `Bearer ${stringTOKEN}`

const AxiosLogin = axios.create({
  baseURL: `${API_URL}/api`,
})

const Axios = axios.create({
  baseURL: `${API_URL}/api`,
})
//Axios.defaults.headers.common['Authorization'] = TOKEN

Axios.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: TOKEN,
    }
    return config
  },
  (error) => {
    if (error.response.status === 401) {
      useHistory().push('/')
    } else {
      return Promise.reject(error)
    }
  },
)

Axios.interceptors.response.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: TOKEN,
    }
    return config
  },
  (error) => {
    if (error.response.status === 401) {
      useHistory().push('/')
    } else {
      return Promise.reject(error)
    }
  },
)

export { AxiosLogin, Axios }
