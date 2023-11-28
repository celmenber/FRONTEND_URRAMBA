/* eslint-disable prettier/prettier */
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import {
  cilEnvelopeClosed,
  cilLockLocked,
  cilLockUnlocked,
  cilPeople,
  cilPhone,
  cilTrash,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import Modal from '../modals/Modal'
import FormAsociaciones from '../form/FormAsociaciones1'
const Asociaciones = () => {
  const [modal, setModal] = useState(false)
  const [loading] = useState(true)
  const toggleModal = (isOpen) => {
    setModal(isOpen)
  }
  const EliminarUsuarios = (id) => {
    Swal.fire({
      title: '¿Estas seguro de eliminar este Usuario?',
      text: 'El Usuario eliminado no se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        /* dispatch(borrarUsuarioAction(id)); */
      }
    })
  }

  return (
    <>
      <CContainer fluid>
        <CCard>
          <CCardHeader>
            <strong>Administrar</strong> <small>Asociaciones</small>
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
                  onClick={toggleModal}
                  /* onClick={() => setVisibleNUS(true)} */
                >
                  {' '}
                  {'Agregar Nueva Asociación'}
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
          <Modal
            visible={modal}
            closeModal={() => toggleModal(false)}
            title="Nueva Asociación"
            content={
              <>
                <FormAsociaciones />
              </>
            }
            onSave={() => {
              // Lógica de guardar cambios (opcional, solo si necesitas botón "Save changes")
            }}
          />
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Asociación</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Representante Empresa</CTableHeaderCell>
                  <CTableHeaderCell colSpan={2} className="text-center">
                    Ubicación
                  </CTableHeaderCell>
                  <CTableHeaderCell colSpan={3} className="text-center">
                    Acciones
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {loading ? (
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
                          <strong>{'Nombre de la Asociacion'}</strong>
                        </span>
                        <small style={{ marginLeft: '5px' }}>NIT {'1452467723'}</small>
                      </div>
                      <div className="small text-medium-emphasis">
                        <span>
                          <CIcon size="sm" icon={cilEnvelopeClosed} /> {'Correo@gmail.com'}
                        </span>{' '}
                        |{' '}
                        <span>
                          <CIcon size="sm" icon={cilPhone} /> TEL: {'555 55 55'}
                        </span>
                      </div>
                    </CTableDataCell>

                    <CTableDataCell className="text-center">
                      <div>{'Juan Pablo Perez Redondo'}</div>
                    </CTableDataCell>

                    <CTableDataCell>
                      <div>
                        <small style={{ marginLeft: '0px' }}>{'Municipio'}</small>
                      </div>
                      <div className="small text-center text-medium-emphasis">
                        <span>
                          {' '}
                          <strong>{'Dibulla'}</strong>
                        </span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="text-center">
                        <small style={{ marginLeft: '0px' }}>{'Dirección'}</small>
                      </div>
                      <div className="small text-center text-medium-emphasis">
                        <span>
                          {' '}
                          <strong>{'Calle 3 # 6-89'}</strong>
                        </span>
                      </div>
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
                            onClick={() => EliminarUsuarios()}
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
        </CCard>
      </CContainer>
    </>
  )
}
export default Asociaciones
