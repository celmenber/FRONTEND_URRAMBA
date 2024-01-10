/* eslint-disable prettier/prettier */
import { TYPES } from '../type/LoginType'

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT,
  LOGIN_ERROR
} = TYPES

const user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : ''

const token = localStorage.getItem('currentUser')
  ? localStorage.getItem('token')
  : ''

export const initialState = {
  userDetails: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: action.payload.access_data,
        token: action.payload.access_token,
        loading: false,
      }
    case LOGIN_LOGOUT:
      return {
        ...state,
        userDetails: '',
        token: '',
        errorMessage: null,
        loading: false,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      }

    default: return { ...state }
  }
}
