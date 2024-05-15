/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { CLoadingButton, CModalTitle } from '@coreui/react-pro'
import {
  CButton,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
} from '@coreui/react'
import { Usuarios } from 'src/hooks'


const TrasladoMiembro = (Props) => {
  const [validated, setValidated] = useState(false)
  const { visibleTM, setVisibleTM  } = Props
//datoUsuario, setDatoUsuario, onChangeFormulario
  const {
    editarUsuario,
    obtenerPerfil,
    cargando,
  } = Usuarios()

  // const { ID_JEFEH, ID_MIEMBRO  } = datoUsuario

  const handleReset = () => {
    /* setDatoUsuario({
      ID_JEFEH: '',
      ID_MIEMBRO: '',
    })*/
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
     /*  const formularioDatos = {
        ID_JEFEH,
        ID_MIEMBRO,
      }

      editarUsuario({
        formularioDatos,
        handleReset,
        Id: ID_MIEMBRO,
      })
        setVisibleUS(false) */
    }
    setValidated(true)
  }

useEffect(() => {
    // Consultar la api un parque
    obtenerPerfil()
    // eslint-disable-next-line
  }, [])

    const handleClose = () => {
       handleReset()
        setValidated(false)
        setVisibleTM(false)
    }

  return (
    <>
       <CModal size="xl" visible={visibleTM} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle>
            {' '}
            <strong>Corregir el Usuario</strong>
          </CModalTitle>
        </CModalHeader>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <CRow className="g-3">
               <CCol md={12} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom06" value={''}>Jefe de hogar*</CFormLabel>
                {/* <CFormSelect
                  key={'validationCustom06'}
                  name='ID_ROLL'
                  id="ID_ROLL"
                  value={ID_ROLL}
                  onChange={onChangeFormulario}
                  required
                >
                  <option key={'validationCustom001'} value={''}>Seleccione...</option>
                  {Perfil?.length === 0
                    ? <option key={'validationCustom002'} value={0}>Seleccione...</option>
                    : (
                      Perfil?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.NOMBRE}
                        </option>
                      ))
                    )}
                </CFormSelect> */}
                <CFormFeedback invalid>Seleccione un Municipio por favor.</CFormFeedback>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={10} style={{ marginTop: '20px', marginBottom: '20px' }}>
                {cargando === true ? (
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    style={{ width: '100%' }}
                    timeout={2000}
                  >
                    {' '}
                    {'Actualizando Datos Usuario'}
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'primary'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                    {'Actualizar Datos Usuario'}
                  </CButton>
                )}
              </CCol>
              <CCol xs={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
                <CButton
                  type="button"
                  color={'dark'}
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => handleClose()}
                >
                  {' '}
                  {'Cancelar'}
                </CButton>
              </CCol>
            </CRow>
          </CModalBody>
        </CForm>
      </CModal>
    </>
  )
}
export default TrasladoMiembro
