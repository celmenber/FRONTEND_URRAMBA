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


const AdminUsuariosModalAct = (Props) => {
  const [validated, setValidated] = useState(false)
  const { visibleUS, setVisibleUS, datoUsuario, setDatoUsuario, onChangeFormulario } = Props

  const {
    editarUsuario,
    obtenerPerfil,
    cargando,
    Perfil
  } = Usuarios()

  const { USERNAME, ID_ROLL, ID_USER  } = datoUsuario

  const handleReset = () => {
    setDatoUsuario({
      USERNAME: '',
      ID_ROLL: '',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      const formularioDatos = {
        ID_ROLL,
        USERNAME,
      }

      editarUsuario({
        formularioDatos,
        handleReset,
        Id: ID_USER,
      })
        setVisibleUS(false)
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
        setVisibleUS(false)
    }

  return (
    <>
       <CModal size="xl" visible={visibleUS} onClose={handleClose}>
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
               <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom06" value={''}>Perfil*</CFormLabel>
                <CFormSelect
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
                </CFormSelect>
                <CFormFeedback invalid>Seleccione un Municipio por favor.</CFormFeedback>
              </CCol>
                <CCol md={8} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Usuario*</CFormLabel>
                <CFormInput
                  type="email"
                  id="validationCustom07"
                  name="USERNAME"
                  value={USERNAME}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Usuario es Requerido!</CFormFeedback>
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
export default AdminUsuariosModalAct
