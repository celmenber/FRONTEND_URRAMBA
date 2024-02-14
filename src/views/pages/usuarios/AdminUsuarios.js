/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useEffect } from 'react'
import AdminUsuariosModalCrear from './AdminUsuariosModal'
import AdminUsuariosModalActuliza from './AdminUsuariosActModal'

import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CButton,
  CSpinner,
  CTooltip,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CAvatar,
} from '@coreui/react'
//import { CLoadingButton } from '@coreui/react-pro'
import { Usuarios } from 'src/hooks'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import { cilLockLocked, cilLockUnlocked, cilPeople, cilTrash } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'
import { useState } from 'react'

const AdminUsuarios = () => {
  const [selectServicio] = useState(1)

  const {
    onChangeFormulario,
    obtenerUsuario,
    usuariolista,
    EditaUsuarios,
    EliminarUsuarios,
    datoUsuario,
    setDatoUsuario,
    selectActivar,
    visibleNUS,
    setVisibleNUS,
    visibleUS,
    setVisibleUS,
    cargandoLista,
  } = Usuarios()

  useEffect(() => {
    // Consultar la api listar parques
    obtenerUsuario()
    // eslint-disable-next-line
  }, [])

  const handleSelectEst = (id) => {
    console.log(id)
   /*  setSelectActivar(true)
    setSelectServicio(id)
    UpdateUserEstado(id) */
  }


  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gestión</strong> <small>Servicios Parques</small>
          </CCardHeader>
          {/* proceso de listar archovos de las normativas */}
          <CCardBody>
        {/*     <hr /> */}
            <CForm>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center"></CTableHeaderCell>
                    <CTableHeaderCell colSpan={'1'}>Usuario</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Perfil</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Tipo Usuario</CTableHeaderCell>
                    <CTableHeaderCell colSpan={3} className="text-center">
                      Acciones
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {cargandoLista === true ? (
                    <CTableRow key={0}>
                      <CTableHeaderCell colSpan={8} className="text-center">
                        <CSpinner aria-hidden="true" />
                        <span
                          style={{
                            top: '-10px',
                            position: 'relative',
                          }}
                        >
                          {' '}
                          Loading...
                        </span>
                      </CTableHeaderCell>
                    </CTableRow>
                  ) : (
                      usuariolista?.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                          <CAvatar
                            size="md"
                            key={index}
                            src={avatar}
                            status={item.Estado === true ? 'success' : 'secondary'}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content={item.ESTADO === '1' ? 'Desactivar' : 'Activar'}
                              placement="bottom"
                            >
                                {selectServicio === item.ID_USER && selectActivar === true ? (
                                <CLoadingButton
                                  variant="outline"
                                  size="lg"
                                  color={item.ESTADO === '1' ? 'secondary' : 'success'}
                                  style={{ width: '100%' }}
                                  timeout={2000}
                                ></CLoadingButton>
                              ) : (
                                <CButton
                                  size="lg"
                                  color={item.ESTADO === '1' ? 'success' : 'secondary'}
                                  style={{ width: '100%' }}
                                      id={`estado${item.ID_USER}`}
                                      key={item.ID_USER}
                                      disabled={item.ID_ROLL === 1 ? true : false}
                                      onClick={() => handleSelectEst(item.ID_USER)}
                                >
                                    {item.ESTADO === '1' ? (
                                    <CIcon icon={cilLockUnlocked} size="lg" />
                                  ) : (
                                    <CIcon icon={cilLockLocked} size="lg" />
                                  )}
                                </CButton>
                              )}
                            </CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>
                            <span>
                              {' '}
                                <strong>{
                                item.USERNAME}</strong>
                            </span>
                            <small style={{ marginLeft: '5px' }}>
                                <span>Tel:{item.ID_EMP !== 0 ? item.emp_telefono : item.aut_telefono}</span>
                            </small>
                          </div>
                          <div className="small text-medium-emphasis">
                              <span>

                                {item.ID_EMP !== 0 ? item.emp_nombres + ' ' + item.emp_apellidos
                                  : item.aut_nombres + ' ' + item.aut_apellidos}
                                </span> |{' '}
                              <span> C.C.{item.ID_EMP !== 0 ? item.emp_documento : item.aut_documentos}</span>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                            <h5>{item.USER_ROL}</h5>
                        </CTableDataCell>
                          <CTableDataCell className="text-center">
                            <h5>
                              {item.ID_EMP !== 0 ? 'Empleado' : 'Autoridad tradicional'}</h5>
                          </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip content="Reiniciar Clave Usuario." placement="bottom">
                              <CButton
                                style={{ width: '100%' }}
                                color="warning"
                                variant="outline"
                                size="lg"
                                //onClick={() => EditaUsuariosClave(item.UsuarioId)}
                              >
                                {'Reiniciar Clave'}
                              </CButton>
                            </CTooltip>
                          </div>
                        </CTableDataCell>

                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip content="Actulizar Usuario" placement="bottom">
                              <CButton
                                style={{ width: '100%' }}
                                color="info"
                                variant="outline"
                                size="lg"
                                  onClick={() => EditaUsuarios(item.ID_USER)}
                              >
                                {'Editar'}
                              </CButton>
                            </CTooltip>
                          </div>
                        </CTableDataCell>

                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip content="Eliminar Usuario" placement="bottom">
                              <CButton
                                style={{ width: '100%' }}
                                color="danger"
                                variant="outline"
                                size="lg"
                                  disabled={item.ESTADO === 0 ? true : false}
                                  onClick={() => EliminarUsuarios(item.ID_USER)}
                              >
                                <CIcon icon={cilTrash} size="lg" />
                              </CButton>
                            </CTooltip>
                          </div>
                        </CTableDataCell>
                      </CTableRow>
                    ))
                  )}
                </CTableBody>
              </CTable>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>

      <AdminUsuariosModalCrear visibleNUS={visibleNUS} setVisibleNUS={setVisibleNUS} />
      <AdminUsuariosModalActuliza
        visibleUS={visibleUS}
        setVisibleUS={setVisibleUS}
        datoUsuario={datoUsuario}
        setDatoUsuario={setDatoUsuario}
        onChangeFormulario={onChangeFormulario}
      />
    </CRow>
  )
}
export default AdminUsuarios
