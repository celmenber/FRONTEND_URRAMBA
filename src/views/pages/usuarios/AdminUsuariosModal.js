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
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
} from '@coreui/react'
import { Usuarios } from 'src/hooks'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

const AdminUsuariosModal = (Props) => {
  const [validated, setValidated] = useState(false)
  const handleClose = () => setVisibleNUS(false)

  const { visibleNUS, setVisibleNUS, parquesone, parquesCodigo } = Props

  const {
    onChangeFormulario,
    crearNuevoUsuario,
    obtenerPerfil,
    obtenerTipoUser,
    perfil,
    tipouser,
    datoUsuario,
    setDatoUsuario,
    cargando,
    User,
  } = Usuarios()

  const { usuario, claveuno, estado, codperfil, codtipousuario, documento, nombres, apellidos } =
    datoUsuario

  const handleReset = () => {
    setDatoUsuario({
      usuario: '',
      claveuno: '',
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
        UsuarioCreacion: User.userDetails.Id,
        ParqueId: parquesCodigo === 0 ? parquesone?.ParqueId : parquesCodigo,
        TipoUsuarioId: parseInt(codtipousuario),
        PerfilId: parseInt(codperfil),
        Email: usuario,
        Password: claveuno,
        Documento: documento,
        Nombres: nombres,
        Apellidos: apellidos,
        Estado: estado,
      }

      crearNuevoUsuario({
        formularioDatos,
        handleReset,
      })
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
      <CModal size="xl" visible={visibleNUS} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle>
            {' '}
            <strong>Agregar nuevo Usuario</strong>
          </CModalTitle>
        </CModalHeader>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          {/* <CModalBody>
                        <CRow className="g-3">
                            <CCol md={7} style={{ marginTop: '15px' }}>
                                    <CFormLabel htmlFor="validationCustom01">Nombre Usuario*</CFormLabel>
                                    <CFormInput type="email"
                                        id="validationCustom01"
                                        name='usuario'
                                        value={usuario}
                                        onChange={onChangeFormulario}
                                        required />
                                  <CFormFeedback invalid>El campo Usuario es Requerido!</CFormFeedback>
                            </CCol>
                            <CCol md={5} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom02">Clave*</CFormLabel>
                                <CFormInput 
                                    type="text" 
                                    id="validationCustom002" 
                                    name='claveuno'
                                    value={claveuno}
                                    onChange={onChangeFormulario}
                                    required />
                                <CFormFeedback invalid>El campo Clave es Requerido!</CFormFeedback>
                            </CCol>
                        </CRow>
                       <CRow>
                            <CCol md={3} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom04">Estado*</CFormLabel>
                                <CFormSelect
                                    id="validationCustom04"
                                    name='estado'
                                    value={estado}
                                    onChange={onChangeFormulario}
                                    required>
                                    <option value={''}>Seleccione...</option>
                                    <option value={true}>Activar</option>
                                    <option value={false}>Desactivar</option>
                                </CFormSelect>
                                <CFormFeedback invalid>El campo Estado es Requerido!</CFormFeedback>
                            </CCol>
                            <CCol md={4} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom05">Perfil*</CFormLabel>
                                <CFormSelect
                                    id="validationCustom05"
                                    name='codperfil'
                                    value={codperfil}
                                    onChange={onChangeFormulario}
                                    required>
                                    <option Key={'0'} value={''}>Seleccione...</option>
                                    {perfil?.length === 0
                                        ? <option Key={'0'} value={0}>Seleccione...</option>
                                        : (
                                            perfil?.filter(P => P.CodigoPerfil !== 0).map(item => (
                                                <option
                                                    Key={item.PerfilId}
                                                    value={item.PerfilId}
                                                >
                                                    {item.NombrePerfil}
                                                </option>
                                            ))
                                        )}
                                </CFormSelect>
                                <CFormFeedback invalid>El campo Perfil es Requerido!</CFormFeedback>
                            </CCol>
                            <CCol md={5} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom06">Tipo Usuario*</CFormLabel>
                                <CFormSelect
                                    id="validationCustom06"
                                    name='codtipousuario'
                                    value={codtipousuario}
                                    onChange={onChangeFormulario}
                                    required>
                                    <option Key={'0'} value={''}>Seleccione...</option>
                                    {tipouser?.length === 0
                                        ? <option Key={'0'} value={0}>Seleccione...</option>
                                        : (
                                            tipouser?.map(item => (
                                                <option
                                                    Key={item.TipoUsuarioId}
                                                    value={item.TipoUsuarioId}
                                                >
                                                    {item.NombreTipoUsuario}
                                                </option>
                                            ))
                                        )}
                                </CFormSelect>
                                <CFormFeedback invalid>El campo Tipo Usuario es Requerido!</CFormFeedback>
                            </CCol>
                       </CRow>
                        <CRow>
                            <CCol md={4} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom07">Documento*</CFormLabel>
                                <CFormInput 
                                    type="text"
                                    id="validationCustom07"
                                    name='documento'
                                    value={documento}
                                    onChange={onChangeFormulario}
                                    required />
                                <CFormFeedback invalid>El campo Documento es Requerido!</CFormFeedback>
                            </CCol>
                            <CCol md={4} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom01">Nombres*</CFormLabel>
                                <CFormInput 
                                    type="text" 
                                    id="validationCustom001" 
                                    name='nombres'
                                    value={nombres}
                                    onChange={onChangeFormulario}
                                    required />
                                <CFormFeedback invalid>El campo Nombres es Requerido!</CFormFeedback>
                            </CCol>
                            <CCol md={4} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom01">Apellidos*</CFormLabel>
                                <CFormInput 
                                    type="text" 
                                    id="validationCustom002" 
                                    name='apellidos'
                                    value={apellidos}
                                    onChange={onChangeFormulario}
                                    required />
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
                                        Enviando Datos Usuarios
                                    </CLoadingButton>
                                ) : (
                                    <CButton
                                        type="submit"
                                        color={'success'}
                                        className="px-4"
                                        style={{ width: '100%' }}
                                    >
                                        {' '}
                                        {'Enviar Datos Usuarios'}
                                    </CButton>
                                )}
                            </CCol>
                            <CCol xs={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <CButton
                                    type="button"
                                    color={'light'}
                                    className="px-4"
                                    style={{ width: '100%' }}
                                    onClick={() => handleReset()}
                                >
                                    {' '}
                                    {'Nuevo Usuario'}
                                </CButton>
                            </CCol>
                        </CRow>
                    </CModalBody> */}
        </CForm>
      </CModal>
    </>
  )
}
export default AdminUsuariosModal
