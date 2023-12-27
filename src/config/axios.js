import axios from 'axios'
import { useHistory } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL

const stringTOKEN = localStorage.getItem('currentUser') ? localStorage.getItem('token') : ''

const TOKEN = `Bearer ${stringTOKEN}`

const AxiosPublico = axios.create({
  baseURL: `${API_URL}/api`,
})

const AxiosPrivado = axios.create({
  baseURL: `${API_URL}/api`,
})

AxiosPrivado.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: TOKEN,
      'Access-Control-Allow-Origin': true,
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

export { AxiosPublico, AxiosPrivado }
