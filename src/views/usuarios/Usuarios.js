/* eslint-disable prettier/prettier */
import { CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CNav, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
const Usuarios = () => {
    return (
        <>
            <CCard className="mb-4 p-4">
                <CCard className="mb-2 p-2">
                    <CCard className='mb-1'>
                        <CNav expand="lg" colorScheme="light" className="bg-light">

                            <CCardBody>

                                <div className="d-flex justify-content-between align-items-center">
                                    <CCardTitle>
                                        Usuarios
                                    </CCardTitle>
                                    <CForm className="d-flex">
                                        <CFormInput type="search" className="me-2" placeholder="Buscar Asociación" />
                                        <CButton type="submit" color="success" variant="outline">
                                            Buscar
                                        </CButton>
                                    </CForm>
                                </div>
                            </CCardBody>
                        </CNav>
                        <CCardBody>
                            <CRow className="mb-0">
                                <CCol xs={12} sm={6}>
                                    <CForm>
                                        <CFormLabel htmlFor="FormControlInputFirstName">Nombre:</CFormLabel>
                                        <CFormInput type="text" size='sm' id="FormControlInputFirstName" placeholder="Escriba su Nombre" aria-describedby="FormControlInputHelpInline" />
                                    </CForm>
                                </CCol>
                                <CCol xs={12} sm={6}>
                                    <CForm>
                                        <CFormLabel htmlFor="FormControlInputLastName">Apellido:</CFormLabel>
                                        <CFormInput type="text" size='sm' id="FormControlInputLastName" placeholder="Escriba su Apellido" aria-describedby="FormControlInputHelpInline" />
                                    </CForm>
                                </CCol>
                                <CCol xs={12} sm={6}>
                                    <CForm>
                                        <CFormLabel htmlFor="FormControlInputEmail">Correo Electrónico:</CFormLabel>
                                        <CFormInput type="email" size='sm' id="FormControlInputEmail" placeholder="Escriba su correo" aria-describedby="FormControlInputHelpInline" />
                                    </CForm>
                                </CCol>
                                <CCol xs={12} sm={6}>
                                    <CForm>
                                        <CFormLabel htmlFor="FormControlInputPassword">Password:</CFormLabel>
                                        <CFormInput type="password" size='sm' id="FormControlInputPassword" placeholder="Escriba su Apellido" aria-describedby="FormControlInputHelpInline" />
                                    </CForm>
                                </CCol>
                                <CCol xs={12} sm={6} className='d-flex align-item-end'>
                                    <CButton>Limpiar</CButton>
                                    <CButton>Guardar</CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                    <CCard className='p-2'>

                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Apellido</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Correo Electrónico</CTableHeaderCell>
                                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>Mark</CTableDataCell>
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                    <CTableDataCell><CButton color='info'>Editar</CButton><CButton color='danger'>Eliminar</CButton></CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Jacob</CTableDataCell>
                                    <CTableDataCell>Thornton</CTableDataCell>
                                    <CTableDataCell>@fat</CTableDataCell>
                                    <CTableDataCell><CButton color='info'>Editar</CButton><CButton color='danger'>Eliminar</CButton></CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                    <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
                                    <CTableDataCell>@twitter</CTableDataCell>
                                    <CTableDataCell><CButton color='info'>Editar</CButton><CButton color='danger'>Eliminar</CButton></CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>


                    </CCard>
                </CCard>
            </CCard>
        </>
    )
}
export default Usuarios