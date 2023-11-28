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
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
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
  const [selectServicio, setSelectServicio] = useState(1)

  const {
    onChangeFormulario,
    obtenerUsuario,
    usuariolista,
    activeKey,
    UpdateUserEstado,
    EditaUsuarios,
    EliminarUsuarios,
    datoUsuario,
    setDatoUsuario,
    selectActivar,
    setSelectActivar,
    usuariodetalle,
    setUsuariodetalle,
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
    setSelectActivar(true)
    setSelectServicio(id)
    UpdateUserEstado(id)
  }

  //console.log(parquesCodigo);
  console.log(usuariodetalle)

  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gestión</strong> <small>Servicios Parques</small>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CCol xs={12}>
                <CButton
                  type="button"
                  color={'primary'}
                  variant="outline"
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => setVisibleNUS(true)}
                >
                  {' '}
                  {'Agregar un Nuevo Usuario'}
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
          {/* proceso de listar archovos de las normativas */}
          <CCardBody>
            <hr />
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
                    <CTableHeaderCell className="text-center">Actividad</CTableHeaderCell>
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
                    usuariodetalle?.Data?.map((item, index) => (
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
                              content={item.Estado === true ? 'Desactivar' : 'Activar'}
                              placement="bottom"
                            >
                              {selectServicio === item.UsuarioId && selectActivar === true ? (
                                <CLoadingButton
                                  variant="outline"
                                  size="lg"
                                  color={item.Estado === true ? 'secondary' : 'success'}
                                  style={{ width: '100%' }}
                                  timeout={2000}
                                ></CLoadingButton>
                              ) : (
                                <CButton
                                  size="lg"
                                  color={item.Estado === true ? 'success' : 'secondary'}
                                  style={{ width: '100%' }}
                                  id={`estado${item.UsuarioId}`}
                                  key={item.UsuarioId}
                                  disabled={item.Perfil.CodigoPerfil === 0 ? true : false}
                                  onClick={() => handleSelectEst(item.UsuarioId)}
                                >
                                  {item.Estado === true ? (
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
                              <strong>{item.Email}</strong>
                            </span>
                            <small style={{ marginLeft: '5px' }}>
                              {item.Nombres} {item.Apellidos}
                            </small>
                          </div>
                          <div className="small text-medium-emphasis">
                            <span>{item.TipoUsuario.NombreTipoUsuario}</span> |{' '}
                            <span> C.C {item.Documento}</span>
                          </div>
                        </CTableDataCell>

                        <CTableDataCell className="text-center">
                          <h5>{item.Perfil.NombrePerfil}</h5>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Último login</div>
                          <strong>{'10 sec ago'}</strong>
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
                                onClick={() => EditaUsuarios(item.UsuarioId)}
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
                                disabled={item.Perfil.CodigoPerfil === 0 ? true : false}
                                onClick={() => EliminarUsuarios(item.UsuarioId)}
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
