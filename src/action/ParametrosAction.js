/* eslint-disable prettier/prettier */
import TYPES from '../type/ParametrosType'
import { Axios } from 'src/config/axios'

const {
  OBTENER_MUNICIPIO,
  OBTENER_MUNICIPIO_SUCCESS,
  OBTENER_MUNICIPIO_ERROR,
  OBTENER_BARRIOVEREDA,
  OBTENER_BARRIOVEREDA_SUCCESS,
  OBTENER_BARRIOVEREDA_ERROR,
  OBTENER_CORREGIMIENTO,
  OBTENER_CORREGIMIENTO_SUCCESS,
  OBTENER_CORREGIMIENTO_ERROR,
  OBTENER_TIPODOCUMENTO,
  OBTENER_TIPODOCUMENTO_SUCCESS,
  OBTENER_TIPODOCUMENTO_ERROR,
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

// procedimiento obtener listado dato corregimeinto
export const obtenercorregimientoAction = () => {
  return async (dispatch) => {
    dispatch(Obtenercorregimiento())

    try {
      const { data } = await Axios.get('/parametros/view-veredas_barrios')
      if (data.code === 200) {
        dispatch(obtenercorregimientoExitosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenercorregimientoError())
    }
  }
}

const Obtenercorregimiento = () => ({
  type: OBTENER_CORREGIMIENTO,
  payload: true,
})

const obtenercorregimientoExitosa = (datos) => ({
  type: OBTENER_CORREGIMIENTO_SUCCESS,
  payload: datos,
})

const obtenercorregimientoError = () => ({
  type: OBTENER_CORREGIMIENTO_ERROR,
  payload: true,
})

// procedimiento obtener listado dato TIPO DOCUMENTO
export const obtenertipodocumentoAction = () => {
  return async (dispatch) => {
    dispatch(Obtenertipodocumento())

    try {
      const { data } = await Axios.get('/parametros/view-veredas_barrios')
      if (data.code === 200) {
        dispatch(obtenertipodocumentoExitosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenertipodocumentoError())
    }
  }
}

const Obtenertipodocumento = () => ({
  type: OBTENER_TIPODOCUMENTO,
  payload: true,
})

const obtenertipodocumentoExitosa = (datos) => ({
  type: OBTENER_TIPODOCUMENTO_SUCCESS,
  payload: datos,
})

const obtenertipodocumentoError = () => ({
  type: OBTENER_TIPODOCUMENTO_ERROR,
  payload: true,
})
