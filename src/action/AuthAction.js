/* eslint-disable prettier/prettier */
import { TYPES } from '../type/LoginType'
import { AxiosPublico } from '../config/axios';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT,
  LOGIN_ERROR
} = TYPES;

export const loginUser = (Loginform) => {
  return async (dispatch) => {

    dispatch(AuthLogin());

    try {
      // insertar en la API
      const { data } = await AxiosPublico.post('app/auth/login', Loginform);
      if (data.code === 200) {
        localStorage.setItem('currentUser', JSON.stringify(data))
        localStorage.setItem('token', data.token)
        dispatch(AuthLoginExito(data));
        return data
      }
    } catch (error) {
      dispatch(AuthLoginError(error));
      return error
    }
  }
}


const AuthLogin = () => ({
  type: LOGIN_REQUEST,
  payload: true
});

// si el producto se guarda en la base de datos
const AuthLoginExito = datos => ({
  type: LOGIN_SUCCESS,
  payload: datos
})

// si hubo un error
const AuthLoginError = error => ({
  type: LOGIN_ERROR,
  error: error
});

export const logout = async (dispatch) => {

  localStorage.removeItem('currentUser')
  localStorage.removeItem('token')
  dispatch({ type: LOGIN_LOGOUT })

}
