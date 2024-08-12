/* eslint-disable prettier/prettier */
import { TYPES } from '../type/LoginType'
import { Login } from '../config/axios';

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
      const { data } = await Login.post('/auth/login', Loginform, {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          'X-Frame-Options': 'sameorigin',
          'Access-Control-Allow-Origin': '*',
        },
      });
      if (data.success === true) {

        const { access_token, access_data } = data.data
        window.localStorage.setItem('token', access_token)
        window.localStorage.setItem('currentUser', JSON.stringify(access_data))
        dispatch(AuthLoginExito(data.data));
        //console.log(access_token)
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
