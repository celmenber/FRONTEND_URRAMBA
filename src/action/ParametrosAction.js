/* eslint-disable prettier/prettier */
import TYPES from '../type/ParametrosType'
import { AxiosPrivado } from 'src/config/axios'

const {
  OBTENER_MUNICIPIO,
  OBTENER_MUNICIPIO_SUCCESS,
  OBTENER_MUNICIPIO_ERROR
} = TYPES

// procedimiento obtener listado dato informate
export const obtenerMunicipioAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerMunicipio())

    try {
      const { data } = await AxiosPrivado.get('parametros/view-municipio',{mode:'no-cors'})
   //   console.log(data)
      if (data.success === true) {
        dispatch(obtenerMunicipioExitosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenerMunicipioError())
    }
  }
}

const ObtenerMunicipio = () => ({
  type: OBTENER_MUNICIPIO,
  payload: true,
})

const obtenerMunicipioExitosa = (datos) => ({
  type: OBTENER_MUNICIPIO_SUCCESS,
  payload: datos,
})

const obtenerMunicipioError = () => ({
  type: OBTENER_MUNICIPIO_ERROR,
  payload: true,
})
