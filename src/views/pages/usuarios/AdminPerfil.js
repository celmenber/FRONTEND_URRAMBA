import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilLockUnlocked, cilHttps, cilUser } from '@coreui/icons'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Usuarios } from 'src/hooks'
import { CLoadingButton } from '@coreui/react-pro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Register = () => {
  const { User, datoUsuario, validated, cargando, onChangeFormulario, handleSubmit } = Usuarios()
  const [valpass, setValpass] = useState(false)
  const [valpassN, setValpassN] = useState(false)
  const [valpassRN, setValpassRN] = useState(false)

  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-left">
          <CCol md={12} lg={12} xl={12}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <h1>Mi Perfil</h1>
                  <p className="text-medium-emphasis">Gestion de la contraseña o password</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      value={User.userDetails.USERNAME}
                      disabled={true}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockUnlocked} />
                    </CInputGroupText>
                    <CFormInput
                      type={valpass === false ? 'password' : 'text'}
                      id="validationCustom01"
                      defaultValue=""
                      name="PASS_ACTUAL"
                      onChange={onChangeFormulario}
                      value={datoUsuario.PASS_ACTUAL}
                      placeholder="Password actual"
                      autoComplete="new-password"
                      required
                    />
                    <CButton
                      type="button"
                      color="secondary"
                      variant="outline"
                      onClick={() => setValpass(!valpass)}
                    >
                      {valpass === false ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </CButton>
                    <CFormFeedback invalid>El campo Password actual es Requerido!</CFormFeedback>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type={valpassN === false ? 'password' : 'text'}
                      id="validationCustom02"
                      defaultValue=""
                      name="PASS_NUEVO"
                      onChange={onChangeFormulario}
                      value={datoUsuario.PASS_NUEVO}
                      placeholder="Password a cambiar"
                      autoComplete="new-password"
                      required
                    />
                    <CButton
                      type="button"
                      color="secondary"
                      variant="outline"
                      onClick={() => setValpassN(!valpassN)}
                    >
                      {valpassN === false ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </CButton>
                    <CFormFeedback invalid>El campo Password a cambiar es Requerido!</CFormFeedback>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilHttps} />
                    </CInputGroupText>
                    <CFormInput
                      type={valpassRN === false ? 'password' : 'text'}
                      id="validationCustom03"
                      defaultValue=""
                      name="PASS_ACTUAL_REPET"
                      onChange={onChangeFormulario}
                      value={datoUsuario.PASS_ACTUAL_REPET}
                      placeholder="Repetir password"
                      autoComplete="new-password"
                      required
                    />
                    <CButton
                      type="button"
                      color="secondary"
                      variant="outline"
                      onClick={() => setValpassRN(!valpassRN)}
                    >
                      {valpassRN === false ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </CButton>
                    <CFormFeedback invalid>El campo Repetir password es Requerido!</CFormFeedback>
                  </CInputGroup>
                  <div className="d-grid">
                    {cargando === true ? (
                      <CLoadingButton
                        color="success"
                        variant="outline"
                        style={{ width: '100%' }}
                        timeout={2000}
                      >
                        {' '}
                        Enviando Datos Contraseña
                      </CLoadingButton>
                    ) : (
                      <CButton
                        type="submit"
                        color={'success'}
                        className="px-4"
                        style={{ width: '100%' }}
                      >
                        {' '}
                        {'Enviar Datos Contraseña'}
                      </CButton>
                    )}
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
