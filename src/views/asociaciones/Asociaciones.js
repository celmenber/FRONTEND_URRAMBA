/* eslint-disable prettier/prettier */
import {
  CButton,
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardTitle,
  CForm,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
} from '@coreui/react'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Modal from '../modals/Modal'
import FormAsociaciones from '../form/FormAsociaciones'
const Asociaciones = () => {
  const [modal, setModal] = useState(false)
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
      <CCard className="mb-4 p-4">
        <CCard className="mb-2 p-2">
          <CCard className="mb-1">
            <CNav expand="lg" colorScheme="light" className="bg-light">
              <CCardBody className="d-flex justify-content-between align-items-center">
                <CCardTitle>Asociaciones</CCardTitle>

                <CNav>
                  <CNavItem className="d-flex align-items-center">
                    <CButton
                      variant="outline"
                      color="primary"
                      onClick={toggleModal}
                      className="d-flex align-items-center"
                    >
                      Nueva Asociación
                    </CButton>
                  </CNavItem>
                </CNav>

                <CForm className="d-flex">
                  <CFormInput type="search" className="me-2" placeholder="Buscar Asociación" />
                  <CButton type="submit" color="success" variant="outline">
                    Buscar
                  </CButton>
                </CForm>
              </CCardBody>
            </CNav>
          </CCard>
        </CCard>

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

        <CCard className="p-2">
          <CCard className="mb-0 p-4">
            <CListGroup flush>
              <CListGroupItem>
                <CCardTitle className="text-medium-emphasis d-flex justify-content-between align-items-center">
                  Asociación de Afrodecendientes de Urramba
                  <div className="d-flex align-items-center">
                    <CButton variant="ghost">Reiniciar Clave</CButton>
                    <CButton color="primary" variant="ghost">
                      Editar
                    </CButton>
                    <CButton color="primary" variant="ghost" onClick={EliminarUsuarios}>
                      Eliminar
                    </CButton>
                  </div>
                </CCardTitle>
                <CCardSubtitle>Nit. 900.812.074-4</CCardSubtitle>
              </CListGroupItem>
            </CListGroup>
          </CCard>
        </CCard>
      </CCard>
    </>
  )
}
export default Asociaciones
