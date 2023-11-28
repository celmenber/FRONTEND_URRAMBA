/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useEffect } from 'react'
import AsociacionModalCrear from './modal/FormAsociacionNuevoModal'
import AsociacionModalActualiza from './modal/FormAsociacionActModal'
import FormAsociacionCodigo from './modal/FormAsociacionCodigoModal'

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
import { AsociacionForm, AsociacionCodForm } from 'src/hooks'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import { cilLockLocked, cilLockUnlocked, cilPeople, cilTrash } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'
import { useState } from 'react'

const AdminAsociaciones = () => {
  const [selectServicio, setSelectServicio] = useState(1)

  const {
    onChangeFormulario,
    obtenerAsociacion,
    EliminarAsociacion,
    EditaAsociacion,
    BuscaMunicipio,
    UpdateAsociacionEstado,
    GeneraCodigo,
    /* metodos */
    datoAsociacion,
    convenio,
    selectActivar,
    setSelectActivar,
    visibleNCV,
    setVisibleNCV,
    visibleCV,
    setVisibleCV,
    visibleCODCV,
    setVisibleCODCV,
    cargandolista,
  } = AsociacionForm()

  const { obtenerAsociacioncod, conveniocodigo } = AsociacionCodForm()

  useEffect(() => {
    // Consultar la api listar parques
    obtenerAsociacion()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    // Consultar la api listar parques
    obtenerAsociacioncod()
    // eslint-disable-next-line
  }, [])

  const handleSelectEst = (id) => {
    setSelectActivar(true)
    setSelectServicio(id)
    UpdateAsociacionEstado(id)
  }

  //console.log(parquesCodigo);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gestión</strong> <small>Asociaciones</small>
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
                  onClick={() => setVisibleNCV(true)}
                >
                  {' '}
                  {'Agregar Nuevo Asociacion'}
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
          {/* proceso de listar archovos de las normativas */}
          <CCardBody>
            <CForm key={0}>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center"></CTableHeaderCell>
                    <CTableHeaderCell colSpan={'1'}>Empresa/Entidad</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Representante Empresa
                    </CTableHeaderCell>
                    <CTableHeaderCell colSpan={2} className="text-center">
                      Ubicación
                    </CTableHeaderCell>
                    <CTableHeaderCell colSpan={3} className="text-center">
                      Acciones
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {cargandolista === true ? (
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
                    convenio?.map((item, index) => (
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
                              {selectServicio === item.IdAsociacion && selectActivar === true ? (
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
                                  id={`estado${item.IdAsociacion}`}
                                  key={item.IdAsociacion}
                                  onClick={() => handleSelectEst(item.IdAsociacion)}
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
                              {item.NombrEmpresa} NIT {item.NitEmpresa}
                            </small>
                          </div>
                          <div className="small text-medium-emphasis">
                            <span>{item.CorreoEmpresa}</span> |{' '}
                            <span> TEL: {item.TelefonoEmpresa}</span>
                          </div>
                        </CTableDataCell>

                        <CTableDataCell className="text-center">
                          <h5>{item.RepresentanteEmpresa}</h5>
                        </CTableDataCell>

                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Municipio/Ciudad</div>
                          <strong>{BuscaMunicipio(item.IdMunicipio)}</strong>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Dirección</div>
                          <strong>{item.DireccionEmpresa}</strong>
                        </CTableDataCell>

                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip content="Reiniciar Clave Usuario." placement="bottom">
                              <CButton
                                style={{ width: '100%' }}
                                color="warning"
                                variant="outline"
                                size="lg"
                                onClick={() => GeneraCodigo(item.IdAsociacion)}
                              >
                                {'Generar Codigo'}
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
                                onClick={() => EditaAsociacion(item.IdAsociacion)}
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
                                onClick={() => EliminarAsociacion(item.IdAsociacion)}
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

      <AsociacionModalCrear visibleNCV={visibleNCV} setVisibleNCV={setVisibleNCV} />
      <AsociacionModalActualiza
        visibleCV={visibleCV}
        setVisibleCV={setVisibleCV}
        datoAsociacion={datoAsociacion}
        onChangeFormulario={onChangeFormulario}
      />
      <FormAsociacionCodigo
        visibleCODCV={visibleCODCV}
        setVisibleCODCV={setVisibleCODCV}
        datoAsociacion={datoAsociacion}
        conveniocodigo={conveniocodigo}
      />
    </CRow>
  )
}
export default AdminAsociaciones
