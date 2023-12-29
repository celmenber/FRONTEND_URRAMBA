/* eslint-disable prettier/prettier */
import TYPES from '../type/ParametrosType'
import { Axios } from 'src/config/axios'

const {
  OBTENER_MUNICIPIO,
  OBTENER_MUNICIPIO_SUCCESS,
  OBTENER_MUNICIPIO_ERROR,
  OBTENER_BARRIOVEREDA,
  OBTENER_BARRIOVEREDA_SUCCESS,
  OBTENER_BARRIOVEREDA_ERROR
} = TYPES

// procedimiento obtener listado dato municipio
export const obtenerMunicipioAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerMunicipio())

    try {
      const { data } = await Axios.get('/parametros/view-municipio')
      if (data.code === 200) {
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

// procedimiento obtener listado dato municipio
export const obtenerBarrioVeredaAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerBarrioVereda())

    try {
      const { data } = await Axios.get('/parametros/view-veredas_barrios')
      if (data.code === 200) {
        dispatch(obtenerBarrioVeredaExitosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenerBarrioVeredaError())
    }
  }
}

const ObtenerBarrioVereda = () => ({
  type: OBTENER_BARRIOVEREDA,
  payload: true,
})

const obtenerBarrioVeredaExitosa = (datos) => ({
  type: OBTENER_BARRIOVEREDA_SUCCESS,
  payload: datos,
})

const obtenerBarrioVeredaError = () => ({
  type: OBTENER_BARRIOVEREDA_ERROR,
  payload: true,
})
