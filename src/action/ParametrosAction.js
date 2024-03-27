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
  OBTENER_ESCOLARIDAD,
  OBTENER_ESCOLARIDAD_SUCCESS,
  OBTENER_ESCOLARIDAD_ERROR,
  OBTENER_ORIENTACION_SEXUAL,
  OBTENER_ORIENTACION_SEXUAL_SUCCESS,
  OBTENER_ORIENTACION_SEXUAL_ERROR,
  OBTENER_PARENTESCO,
  OBTENER_PARENTESCO_SUCCESS,
  OBTENER_PARENTESCO_ERROR,
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
      const { data } = await Axios.get('/parametros/view-corregimiento')
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
      const { data } = await Axios.get('/parametros/view-tipodocumento')
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


export const obtenerEscolaridadAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerTipoEscolaridad())

    try {
      const { data } = await Axios.get('/parametros/view-escolaridad')
      if (data.code === 200) {
        dispatch(obtenerTipoEscolaradadExistosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenerTipoEscolaridadError())
    }
  }
}

const ObtenerTipoEscolaridad = () => ({
  type: OBTENER_ESCOLARIDAD,
  payload: true,
})

const obtenerTipoEscolaradadExistosa = (datos) => ({
  type: OBTENER_ESCOLARIDAD_SUCCESS,
  payload: datos,
})

const obtenerTipoEscolaridadError = () => ({
  type: OBTENER_ESCOLARIDAD_ERROR,
  payload: true,
})

export const obtenerOrientacionSexualAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerOrientacionSexual())

    try {
      const { data } = await Axios.get('/parametros/view-orientacion_sexual')
      if (data.code === 200) {
        dispatch(obtenerOrientacionSexualExitosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenerOrientacionSexualError())
    }
  }
}

const ObtenerOrientacionSexual = () => ({
  type: OBTENER_ORIENTACION_SEXUAL,
  payload: true,
})

const obtenerOrientacionSexualExitosa = (datos) => ({
  type: OBTENER_ORIENTACION_SEXUAL_SUCCESS,
  payload: datos,
})

const obtenerOrientacionSexualError = () => ({
  type: OBTENER_ORIENTACION_SEXUAL_ERROR,
  payload: true,
})


  export const obtenerParentescoAction = () => {
    return async (dispatch) => {
      dispatch(ObtenerParentesco())

      try {
        const { data } = await Axios.get('/parametros/view-parentesco')
        if (data.code === 200) {
          dispatch(obtenerParentescoExitosa(data.data))
        }
      } catch (error) {
        console.log(error)
        dispatch(obtenerParentescoError())
      }
    }
  }

  const ObtenerParentesco = () => ({
    type: OBTENER_PARENTESCO,
    payload: true,
  })

  const obtenerParentescoExitosa = (datos) => ({
    type: OBTENER_PARENTESCO_SUCCESS,
    payload: datos,
  })

  const obtenerParentescoError = () => ({
    type: OBTENER_PARENTESCO_ERROR,
    payload: true,
  })



