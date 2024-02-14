/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { CLoadingButton, CModalTitle } from '@coreui/react-pro'
import {
  CButton,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  //CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
} from '@coreui/react'
import { Usuarios } from 'src/hooks'


const AdminUsuariosModalAct = (Props) => {
  const [validated, setValidated] = useState(false)
  const handleClose = () => {
    handleReset()
    setVisibleUS(false)
  }

  const { visibleUS, setVisibleUS, datoUsuario, setDatoUsuario, onChangeFormulario } = Props

  const {
    editarUsuario,
    usuarioeditar,
    cargando,
    User,
  } = Usuarios()

  const { usuario, estado, codperfil, codtipousuario, documento, nombres, apellidos } = datoUsuario

  const handleReset = () => {
    setDatoUsuario({
      usuario: '',
      estado: '',
      codperfil: '',
      codtipousuario: '',
      documento: '',
      nombres: '',
      apellidos: '',
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
        UsuarioModificacion: User.userDetails.Id,
        TipoUsuarioId: parseInt(codtipousuario),
        PerfilId: parseInt(codperfil),
        Email: usuario,
        Documento: documento,
        Nombres: nombres,
        Apellidos: apellidos,
        Estado: estado,
      }

      editarUsuario({
        formularioDatos,
        handleReset,
        Id: usuarioeditar[0].UsuarioId,
      })

      setVisibleUS(false)
    }

    setValidated(true)
  }

  /* useEffect(() => {
    // Consultar la api un parque
    obtenerPerfil()
    // eslint-disable-next-line
  }, []) */

  /* useEffect(() => {
    // Consultar la api un parque
    obtenerTipoUser()
    // eslint-disable-next-line
  }, []) */

  return (
    <>
      <CModal size="xl" visible={visibleUS} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle>
            {' '}
            <strong>Editar Usuario</strong>
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
              <CCol xs={4}>
                <CFormLabel htmlFor="validationCustom04" value={''}>
                  Parques*
                </CFormLabel>

                <CFormFeedback invalid>Seleccione un Estado Servicio.</CFormFeedback>
              </CCol>
              <CCol md={8} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Nombre Usuario*</CFormLabel>
                <CFormInput
                  type="email"
                  id="validationCustom01"
                  name="usuario"
                  value={usuario}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Usuario es Requerido!</CFormFeedback>
              </CCol>
            </CRow>

            <CRow>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Documento*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom07"
                  name="documento"
                  value={documento}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Documento es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Nombres*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom001"
                  name="nombres"
                  value={nombres}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nombres es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Apellidos*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom002"
                  name="apellidos"
                  value={apellidos}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Apellidos es Requerido!</CFormFeedback>
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
                    Actualizando Datos Usuarios
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'primary'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                    {'Actualizar Datos Usuarios'}
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
                  {'Cancelar Edición'}
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
