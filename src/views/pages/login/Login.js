/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { AuthLogin } from '../../../hooks'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormFeedback,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
  CCardImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../assets/images/avatars/mainIcon.png'
import logotitulo from '../../../assets/images/avatars/logo.png'
import background from "../../../assets/images/avatars/placeholder1.jpg";
//let Message

const Login = () => {
  const {
          handleSubmit,
          handleInputChange,
          formValues,
          estatus,
          toaster,
          loading,
          validated
        } = AuthLogin()

  const [valpass, setValpass] = useState(false)
  const [toast, addToast] = useState(0)
console.log(estatus?.data);
 useEffect(() => {
   if (estatus?.data.code === 400) {
    if(estatus?.data.response !== '102'){
        addToast(<CToast
          autohide={true}
          color={estatus?.data.response === '101' ? 'danger' :'info'}
          className="text-white align-items-center"
          >
            <div className="d-flex">
              <CToastBody>
              {estatus?.data.response === '101'
              ? 'Contraseña o Password es incorrecto'
              : 'Email o Usuario está incorrecto'}
                </CToastBody>
              <CToastClose className="me-2 m-auto" white />
            </div>
          </CToast>)
        }else{
            addToast(<CToast
          autohide={true}
          color={'warning'}
          className="text-white align-items-center"
          >
            <div className="d-flex">
              <CToastBody>{'El Usuario está inactivo'}
                </CToastBody>
              <CToastClose className="me-2 m-auto" white />
            </div>
          </CToast>)
        }
   }
    // eslint-disable-next-line
 }, [estatus])

  return (
    <div
    className="bg-light min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}
    >
      <CToaster ref={toaster} push={toast} placement="top-end" />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9}>
            <CCardGroup>
              <CCard className="p-6">
                <CCardBody>
                  {loading}
                  <CForm
                    className="row needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <h2>
                      <CCardImage orientation="top"
                        src={logotitulo}
                        style={{ width: '80%' }}
                      />
                      {/* URRAMBA */}
                      </h2>
                    <p className="text-medium-emphasis">Iniciar sesión con su correo electronico</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        id="email"
                        required
                        value={formValues.email}
                        onChange={handleInputChange}
                      />
                      <CFormFeedback invalid>
                        La dirección de correo electrónico es requerida.
                      </CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type={valpass === false ? 'password':'text'}
                        name="password"
                        placeholder="Password"
                        id="Password"
                        required
                        value={formValues.password}
                        onChange={handleInputChange}
                        autoComplete="current-password"
                        color="secondary"
                      />
                      <CButton
                          type="button"
                          color="secondary"
                          variant="outline"
                          onClick={() => setValpass(!valpass)}
                         >
                        {valpass === false
                          ? <FontAwesomeIcon icon={faEye} />
                          : <FontAwesomeIcon icon={faEyeSlash} />
                        }
                        </CButton>
                      <CFormFeedback invalid>se requiere su contraseña.</CFormFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        {loading === true ? (
                          <CLoadingButton
                            color="primary"
                            variant="outline"
                            style={{ width: '100%', marginLeft: '10px' }}
                            timeout={2000}
                          >
                            {' '}
                            Iniciando sesión
                          </CLoadingButton>
                        ) : (
                          <CButton
                            type="submit"
                            color="primary"
                            variant="outline"
                            className=""
                            style={{ width: '100%', marginLeft: '10px' }}
                          >
                            {' '}
                            Iniciar sesión
                          </CButton>
                        )}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-info py-4" style={{ width: '100%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h3>ASOCIACIÓN AFRODESCENDIENTES URRAMBA</h3>
                    <p>
                      Herramienta informatica para caracterización de la población
                      negra, afrocolombiana, raizal y
                      palenquera municipio de
                      Dibulla la Guajira Colombia.
                    </p>
                  </div>
                  <CCardImage orientation="top"
                    src={logo}
                    style={{ width: '30%'}}
                   />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
