/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { JefeHogarForm } from 'src/hooks/useJefeHogarForm'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CContainer,
  CForm,
  CFormInput,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CAvatar,
} from '@coreui/react'

const NucleoFamiliar = () => {
  const [mostrarJefeHByID, setMostrarJefeHByID] = useState(false)
  const [habilitarAgregar, setHabilitarAgregar] = useState(false)
  const [tableItems, setTableItems] = useState([])
  const [formData, setFormData] = useState({ name: '', profile: '', phone: '' })

  const { jefeHogarByID, jefeHogarById } = JefeHogarForm()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      setMostrarJefeHByID(true)
      setHabilitarAgregar(false)
      jefeHogarByID(id)
    } else {
      setMostrarJefeHByID(false)
      setHabilitarAgregar(true)
    }
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTableItems([...tableItems, formData])
    setFormData({ name: '', profile: '', phone: '' })
  }

  return (
    <CContainer>
      <CCard>
        <CCardHeader>
          <strong>Nucleo Familiar</strong> <small>Miembros</small>
        </CCardHeader>
        <CCardHeader>
          {mostrarJefeHByID ? (
            <CCardTitle>
              <div className="d-flex align-items-center">
                <CAvatar
                  className="m-3"
                  size="md"
                  src={avatar}
                  status={true ? 'success' : 'danger'}
                />
                <div className="ml-2">
                  <strong>
                    {jefeHogarById?.nombres} {jefeHogarById?.apellidos}
                  </strong>
                  <div className="small text-medium-emphasis">
                    <span> Identidad: {jefeHogarById?.documentos}</span>
                  </div>
                </div>
              </div>
            </CCardTitle>
          ) : (
            <CCardTitle>
              <div className="ml-2">
                <CButton>BUSCAR JEFE HOGAR</CButton>
              </div>
            </CCardTitle>
          )}
        </CCardHeader>
        <CCardBody>
          <CCardTitle>Miembros del núcleo Familiar</CCardTitle>
          <CForm onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <CFormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CFormInput
                  type="text"
                  id="profile"
                  name="profile"
                  placeholder="Perfil"
                  value={formData.profile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CFormInput
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <br/>
            <CButton type="submit"   color={'primary'}
                  variant="outline"
                  className="px-4"
                  disabled ={habilitarAgregar}
                  style={{ width: '100%' }}>Agregar</CButton>
          </CForm>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
                <CTableHeaderCell>Perfil</CTableHeaderCell>
                <CTableHeaderCell>Teléfono</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {tableItems.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.profile}</CTableDataCell>
                  <CTableDataCell>{item.phone}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NucleoFamiliar
