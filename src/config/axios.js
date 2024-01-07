import axios from 'axios'
import { useHistory } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL

const stringTOKEN = window.localStorage.getItem('currentUser')
  ? window.localStorage.getItem('token')
  : ''

const TOKEN = `Bearer ${stringTOKEN}`

/* console.log(window.localStorage.getItem('currentUser'))
console.log(stringTOKEN) */

/* axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Type'] = 'application/json' */

const Login = axios.create({
  baseURL: `${API_URL}/api`,
})

const Axios = axios.create({
  baseURL: `${API_URL}/api`,
})

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

/* Axios.interceptors.response.use(
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
) */

export { Login, Axios }
