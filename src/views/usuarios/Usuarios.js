/* eslint-disable prettier/prettier */
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CNav,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
const Usuarios = () => {
  const tableExample = [
    {
      avatar: { src: avatar, status: 'success' },
      user: {
        name: 'Jose Alvarez',
        cc: '26.589.362',
        new: true,
        registered: 'Jan 1, 2021',
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
        cc: '26.589.362',
        new: false,
        registered: 'Jan 1, 2021',
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
      user: { name: 'Eddy Solano', cc: '26.589.362', new: true, registered: 'Jan 1, 2021' },
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
      user: { name: 'Pedro Fernandez', cc: '26.589.362', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar, status: 'success' },
      user: {
        name: 'Luisa Ceballos',
        cc: '26.589.362',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar, status: 'danger' },
      user: {
        name: 'Federman Pacheco',
        cc: '26.589.362',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  return (
    <>
      <CCard className="mb-4 p-4">
        <CCard className="mb-2 p-2">
          <CCard className="mb-1">
            <CNav expand="lg" colorScheme="light" className="bg-light">
              <CCardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <CCardTitle>Usuarios</CCardTitle>
                  <CForm className="d-flex">
                    <CFormInput type="search" className="me-2" placeholder="Buscar Usuarios" />
                    <CButton type="submit" color="success" variant="outline">
                      Buscar
                    </CButton>
                  </CForm>
                </div>
              </CCardBody>
            </CNav>

            <CForm sm className="row g-3">
              <CCardBody>
                <CRow className="mb-0">
                  <CCol xs={12} sm={6}>
                    <CForm>
                      <CFormInput
                      className='mb-2'
                        type="text"
                        id="FormControlInputName"
                        placeholder="Nombre"
                        aria-describedby="FormControlInputNameHelpInline"
                      />
                    </CForm>
                  </CCol>
                  <CCol xs={12} sm={3}>
                    <CFormSelect aria-label="Default select example">
                      <option>Rol</option>
                      <option value="1">Administrador</option>
                      <option value="2">Operador</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} sm={6}>
                    <CFormInput
                      className='mb-2'
                        type="email"
                        id="exampleFormControlInput1"
                        placeholder="Correo Electrónico"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                  </CCol>

                  <CCol xs={12} sm={4}>
                    
                  <CFormInput
                      className='mb-2'
                        type="password"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                  </CCol>
                  <CCol xs={12} sm={12} className="p-0 mt-2">
                    <CRow className="justify-content-center g-3">
                      <CCol xs className="text-end">
                        <CButton type="reset" className="mr-1 align-">
                          Limpiar
                        </CButton>
                      </CCol>
                      <CCol xs>
                        <CButton type="submit">Guardar</CButton>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </CCardBody>
            </CForm>
          </CCard>

          <CCard className="p-2">
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Usuario</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Documento</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Edad</CTableHeaderCell>
                  <CTableHeaderCell>Usage</CTableHeaderCell>

                  <CTableHeaderCell>Actividad</CTableHeaderCell>
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
                      <CIcon size="xl" icon={item.payment.icon} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>{item.usage.value}%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">{item.usage.period}</small>
                        </div>
                      </div>
                      <CProgress thin color={item.usage.color} value={item.usage.value} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="small text-medium-emphasis">Last login</div>
                      <strong>{item.activity}</strong>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCard>
        </CCard>
      </CCard>
    </>
  )
}
export default Usuarios
