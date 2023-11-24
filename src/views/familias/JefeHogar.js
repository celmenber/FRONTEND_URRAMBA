/* eslint-disable prettier/prettier */

import {
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifFr,
  cifIn,
  cifUs,
  cilLockLocked,
  cilLockUnlocked,
  cilPeople,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CNav,
  CNavItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useState } from 'react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import Modal from '../modals/Modal'
import FormJefeHogar from '../form/FormJefeHogar'
const JefeHogar = () => {
  const [modal, setModal] = useState(false)
  const tableExample = [
    {
      avatar: { src: avatar, status: 'success' },
      user: {
        name: 'Jose Alvarez',
        cc: '26.589.362',
        username: 'jalvarez',
        perfil: 'admin',
        new: true,
        estado: true,
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar, status: 'danger' },
      user: {
        name: 'Leonel Tarantini',
        cc: '26.589.363',
        username: 'Leotar',
        perfil: 'admin',
        new: false,
        registered: 'Jan 1, 2021',
        estado: false,
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar, status: 'warning' },
      user: {
        name: 'Eddy Solano',
        cc: '26.589.364',
        username: 'eddysol',
        perfil: 'operador',
        new: true,
        registered: 'Jan 1, 2021',
        estado: true,
      },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar, status: 'secondary' },
      user: {
        name: 'Pedro Fernandez',
        cc: '26.589.366',
        username: 'PedroF',
        perfil: 'admin',
        new: true,
        registered: 'Jan 1, 2021',
        estado: true,
      },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
  ]
  const toggleModal = (isOpen) => {
    setModal(isOpen)
  }
  return (
    <>
      <CCard className="mb-4 p-4">
        <CCard className="mb-2 p-2">
          <CCard className="mb-1 shadow-sm">
            <CNav expand="lg" colorScheme="light" className="bg-light">
              <CCardBody className="d-flex justify-content-between align-items-center">
                <CCardTitle>Jefes de Hogar</CCardTitle>
                <CNav>
                  <CNavItem className="d-flex align-items-center">
                    <CButton
                      variant=""
                      color="info"
                      onClick={toggleModal}
                      className="d-flex align-items-center"
                    >
                      Nuevo
                    </CButton>
                  </CNavItem>
                </CNav>
              </CCardBody>
            </CNav>
          </CCard>

          <Modal
            visible={modal}
            closeModal={() => toggleModal(false)}
            title="Nuevo Jefe de Hogar"
            content={
              <>
                <FormJefeHogar />
              </>
            }
            onSave={() => {
              // Lógica de guardar cambios (opcional, solo si necesitas botón "Save changes")
            }}
          />

          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell>Usuario</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Documento</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Estado</CTableHeaderCell>
                <CTableHeaderCell>Nombre Usuario</CTableHeaderCell>
                <CTableHeaderCell>Perfil</CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {tableExample.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.user.name}</div>
                    <div className="small text-medium-emphasis">
                      <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registrado:{' '}
                      {item.user.registered}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div>{item.user.cc}</div>
                  </CTableDataCell>

                  <CTableDataCell className="text-center">
                    {!item.user.estado ? (
                      <CButton variant="ghost">
                        <CIcon size="xl" icon={cilLockUnlocked} />
                      </CButton>
                    ) : (
                      <CButton variant="ghost">
                        <CIcon size="xl" icon={cilLockLocked} />
                      </CButton>
                    )}
                  </CTableDataCell>
                  <CTableDataCell>{item.user.username}</CTableDataCell>
                  <CTableDataCell>{item.user.perfil}</CTableDataCell>
                  <CTableDataCell>
                    <CButton variant="outline">Nucleo</CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCard>
      </CCard>
    </>
  )
}
export default JefeHogar
