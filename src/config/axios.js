import axios from 'axios'
import { useHistory } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL

const Login = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: `${API_URL}/servicio/api`,
})

const Axios = axios.create({
  baseURL: `${API_URL}/servicio/api`,
})

Axios.interceptors.request.use(
  (config) => {
    const stringTOKEN = window.localStorage.getItem('currentUser')
      ? window.localStorage.getItem('token')
      : ''
    const TOKEN = `Bearer ${stringTOKEN}`
    config.headers = {
      ...config.headers,
      Authorization: TOKEN,
    }

    return config
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      const history = useHistory()
      history.push('/')
    }
    return Promise.reject(error)
  },
)

export { Login, Axios }
