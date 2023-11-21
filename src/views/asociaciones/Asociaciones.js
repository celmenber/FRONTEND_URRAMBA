/* eslint-disable prettier/prettier */
import { cilPlus, cilSave } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardSubtitle, CCardTitle, CCol, CCollapse, CForm, CFormInput, CFormLabel, CListGroup, CListGroupItem, CNav, CNavItem, CRow, CTooltip } from '@coreui/react'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
const Asociaciones = () => {
    const [visible, setVisible] = useState(false)
    const [modal, setModal] = useState(false)

    const EliminarUsuarios = id => {
        Swal.fire({
          title: '¿Estas seguro de eliminar este Usuario?',
          text: "El Usuario eliminado no se podrá recuperar",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            /* dispatch(borrarUsuarioAction(id)); */
          }
        });
      }

    return (
        <>
            <CCard className="mb-4 p-4" >
                <CCard className="mb-2 p-2">
                    <CCard className='mb-1'>
                        <CNav expand="lg" colorScheme="light" className="bg-light">

                            <CCardBody>

                                <div className="d-flex justify-content-between align-items-center">
                                    <CCardTitle>
                                        Asociaciones
                                    </CCardTitle>

                                    <CNav>
                                        <CNavItem className='d-flex align-items-center'>
                                            <CButton variant='outline' color='info' onClick={() => setVisible(!visible)} className="d-flex align-items-center">
                                                Nueva Asociación
                                                <CIcon icon={cilPlus} className="ml-4" size="xl" />
                                            </CButton>
                                        </CNavItem>
                                    </CNav>


                                    <CForm className="d-flex">
                                        <CFormInput type="search" className="me-2" placeholder="Buscar Asociación" />
                                        <CButton type="submit" color="success" variant="outline">
                                            Buscar
                                        </CButton>
                                    </CForm>
                                </div>
                            </CCardBody>
                        </CNav>

                    </CCard>
                    <CCollapse visible={visible}>
                        <CCard className=''>
                            <CCardBody>
                                <CCard >
                                    <CCardBody>
                                        <CForm>
                                            <CRow className="mb-2" xs={4} >
                                                <CCol >
                                                    <CFormLabel className='mb-0' htmlFor="formControlInput1"><b>Nombre de la Asociación</b></CFormLabel>
                                                    <CFormInput type="text" size="sm" id="formControlInput1" placeholder="Nombre" aria-describedby="formControlInputHelpInline" mb-4 />
                                                </CCol>
                                            </CRow>

                                            <CRow className="g-3 mb-3">
                                                <CCol xs>
                                                    <CFormLabel className='mb-0' htmlFor="FormControlInput1 fw-bolder p-4">
                                                        <CTooltip content="Número de Identificación Tributaria" placement='left'>
                                                            <span className="fw-bolder">NIT:</span>
                                                        </CTooltip>
                                                    </CFormLabel>
                                                    <CFormInput type="text" size='sm' id="formControlInput1" name="nit" placeholder="Dígite el Nit" aria-describedby="formControlInputHelpInline" mb-4 />
                                                </CCol>
                                                <CCol xs>
                                                    <CFormLabel className='mb-0' htmlFor="formControlInput1">
                                                        <b>Correo Electrónico</b>
                                                    </CFormLabel>
                                                    <CFormInput
                                                        type="mail"
                                                        id="formControlInput1"
                                                        placeholder="ejemplo@correo.com"
                                                        aria-describedby="exampleFormControlInputHelpInline"
                                                        mb-4
                                                        size='sm'
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow className="g-3 mb-4">
                                                <CCol xs>
                                                    <CFormLabel className='mb-0' htmlFor="exampleFormControlInput1"><b>Dirección</b></CFormLabel>
                                                    <CFormInput type="text" size='sm' id="FormControlDireccion" placeholder="Calle 100 # 11-50" aria-describedby="exampleFormControlInputHelpInline" mb-4 />
                                                </CCol>
                                                <CCol xs>
                                                    <CFormLabel className='mb-0' htmlFor="exampleFormControlInput1"><b>Teléfono</b></CFormLabel>
                                                    <CFormInput type="phone" size='sm' id="exampleFormControlInput1" placeholder="(500) 555 55 55" aria-describedby="exampleFormControlInputHelpInline" mb-4 />
                                                </CCol>
                                            </CRow>
                                            <CRow className="justify-content-evenly">
                                                <CCol xs={4}><CButton variant='outline' color="info" type='reset'>Limpiar Formulario</CButton></CCol>
                                                <CCol xs={4}><CButton color="info" type='submit' ><b>Guardar</b> <CIcon icon={cilSave} ml-2 size="lg" /></CButton></CCol>
                                            </CRow>


                                            <CRow className="justify-content-center mt-4">
                                                <CButton
                                                    variant='outline'
                                                    color="danger"
                                                    type='button'
                                                    className="d-inline-block"
                                                    style={{ maxWidth: '170px' }}
                                                    onClick={() => setVisible(!visible)}
                                                >
                                                    Cerrar
                                                </CButton>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                            </CCardBody>
                        </CCard>
                    </CCollapse>
                    </CCard>
                    <CCard className='p-2'>
                    <CCard className="mb-0 p-4">
                        <CListGroup flush>
                            <CListGroupItem>
                                <CCardTitle className="text-medium-emphasis d-flex justify-content-between align-items-center">
                                    Nombre de la Asociación
                                    <div className="d-flex align-items-center">
                                        <CButton variant='ghost'>Reiniciar Clave</CButton>
                                        <CButton color="primary" variant="ghost">Editar</CButton>
                                        <CButton color="primary" variant="ghost" onClick={EliminarUsuarios}>Eliminar</CButton>
                                    </div>
                                </CCardTitle>
                                <CCardSubtitle>Nit: xxxxxxxxxx</CCardSubtitle>
                            </CListGroupItem>
                        </CListGroup>
                    </CCard>
                </CCard>
            </CCard>





            

        </>

    )
}
export default Asociaciones