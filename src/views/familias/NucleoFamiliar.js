/* eslint-disable prettier/prettier */
import { cilLockLocked, cilLockUnlocked, cilPeople, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CContainer,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import React from 'react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'

const NucleoFamiliar = () => {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>
            <strong>Nucleo Familiar</strong> <small>Miembros</small>
          </CCardHeader>
          <CCardHeader>
            <CCardTitle>
              <div className="d-flex align-items-center">
                <CAvatar
                  className="m-3"
                  size="md"
                  src={avatar}
                  status={true ? 'success' : 'danger'}
                />
                <div className="ml-2">
                  <strong> {'Jose Pablo Perez Redondo'}</strong>
                  <div className="small text-medium-emphasis">
                    <span>{"1.123'406.888"}</span>
                  </div>
                </div>
              </div>
            </CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CCardTitle>Miebros del nucleo Familiar</CCardTitle>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Usuarios</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Perfil</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Teléfono</CTableHeaderCell>
                    <CTableHeaderCell colSpan={3} className="text-center">
                      Acciones
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {false ? (
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
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={avatar} status={false ? 'success' : 'danger'} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          <span>
                            {' '}
                            <strong>{'Juan Pablo Perez Redondo'}</strong>
                          </span>
                        </div>
                        <div className="small text-medium-emphasis">
                          <span>{"1.123'406.888"}</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{'Admin'}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="small text-medium-emphasis">{'555 55 55'}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="small text-medium-emphasis">
                          <CTooltip content="Bloquear Asociación" placement="bottom">
                            {true ? (
                              <CButton variant="" color="success" size="sm" className="btn-uniform">
                                <CIcon size="xl" icon={cilLockLocked} />
                              </CButton>
                            ) : (
                              <CButton
                                variant="outline"
                                color="warning"
                                size="sm"
                                className="btn-uniform"
                              >
                                <CIcon size="md" icon={cilLockUnlocked} />
                              </CButton>
                            )}
                          </CTooltip>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="small text-medium-emphasis">
                          <CTooltip content="Editar Asociación" placement="bottom">
                            <CButton
                              /* style={{ width: '100%' }} */
                              color="info"
                              variant="outline"
                              size="xl"
                              /* onClick={() => EliminarConvenio(item.IdConvenio)} */
                            >
                              Editar
                            </CButton>
                          </CTooltip>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="small text-medium-emphasis">
                          <CTooltip content="Eliminar Asociación" placement="bottom">
                            <CButton
                              /* style={{ width: '100%' }} */
                              color="danger"
                              variant="outline"
                              size="xl"
                              /* onClick={() => EliminarUsuarios()} */
                              /* onClick={() => EliminarConvenio(item.IdConvenio)} */
                            >
                              <CIcon icon={cilTrash} size="lg" />
                            </CButton>
                          </CTooltip>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  )}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}
export default NucleoFamiliar
