/* eslint-disable prettier/prettier */
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CForm } from '@coreui/react'
import React, { useState } from 'react'
//import Modal from '../modals/Modal'
import FormConcejos from '../form/FormConcejos'
const Concejos = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = (isOpen) => {
    setModal(isOpen)
  }
  return (
    <>
      <CContainer fluid>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Admin</strong> <small>Concejos Comunitarios</small>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CCol xs={12}>
                <CButton
                  type="button"
                  color={'info'}
                  variant="outline"
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={toggleModal}
                  /* onClick={() => setVisibleNUS(true)} */
                >
                  {' '}
                  {'Agregar Nuevo Concejo'}
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
          {/* <Modal
            visible={modal}
            closeModal={() => toggleModal(false)}
            title="Nuevo Concejo Comunitario"
            content={
              <>
                <FormConcejos />
              </>
            }
            onSave={() => {
              // Lógica de guardar cambios (opcional, solo si necesitas botón "Save changes")
            }}
          /> */}
        </CCard>
      </CContainer>
    </>
  )
}
export default Concejos
