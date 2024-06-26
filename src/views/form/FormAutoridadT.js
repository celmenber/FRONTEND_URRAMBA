/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import AutoridadTNuevoCrear from './modal/FormAutoridadTNuevoModal'

import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardHeader,
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
import { AutoridadTForm } from 'src/hooks'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
    cilPeople,
    cilTrash,
} from '@coreui/icons'
import FormAutoridadActModal from './modal/FormAutoridadTActModal'

const AutoridadT = () => {
    const {
      obtenerAutoridadT,
      eliminarAutoridadT,
      EditarAutoridad,
      datoAutoridad,
      autoridadT,
      visibleAT, setVisibleAT,
      visibleEAT, setVisibleEAT,
      cargandolista,
      onChangeFormulario,
      setValidated,
    } = AutoridadTForm()


   useEffect(() => {
     obtenerAutoridadT();
        // eslint-disable-next-line
    }, []);

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
              <strong>Gestión</strong> <small>Autoridad Afro</small>
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
                                    onClick={() => setVisibleAT(true)}
                                >{' '}
                    {'Agregar Nueva Autoridad Afro'}
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>

                    <CCardBody>
                                        <CForm key={0}>
                                            <CTable align="middle" className="mb-0 border" hover responsive>
                                                <CTableHead color="light">
                                                    <CTableRow>
                                                        <CTableHeaderCell className="text-center">
                                                        <CIcon icon={cilPeople} />
                                                        </CTableHeaderCell>
                                                        <CTableHeaderCell colSpan={1}>Datos Autoridad Afro</CTableHeaderCell>
                                                        <CTableHeaderCell colSpan={2}  className="text-center">Ubicación</CTableHeaderCell>
                                                        <CTableHeaderCell colSpan={3} className="text-center">Acciones</CTableHeaderCell>
                                                    </CTableRow>
                                                </CTableHead>
                                                <CTableBody>
                                                  {cargandolista === true ? (
                                                        <CTableRow key={0} >
                                                            <CTableHeaderCell colSpan={8} className="text-center">
                                                                <CSpinner aria-hidden="true" />
                                                                <span style={{
                                                                    top: '-10px',
                                                                    position: 'relative'
                                                                }}> Loading...</span>
                                                            </CTableHeaderCell>
                                                        </CTableRow>
                                                    ) : (

                                                   autoridadT?.map((item, index) => (
                                                         <CTableRow v-for="item in tableItems" key={index}>

                                                                <CTableDataCell className="text-center">
                                                                    <CAvatar size="md"
                                                                        key={index}
                                                                        src={avatar}
                                                                        status={parseInt(item.estado) === 1 ? 'success' : 'secondary'}
                                                                    />
                                                                </CTableDataCell>
                                                                <CTableDataCell>
                                                                    <div>
                                                                        <span> <strong>
                                                                          { item.nombres } {item.apellidos}
                                                                        </strong></span><br></br>
                                                                        <small style={{ marginLeft: '5px' }}>
                                                                         {item.Tipo_documento}: {item.documentos}
                                                                        </small>
                                                                    </div>
                                                                    <div className="small text-medium-emphasis">
                                                                        <span>
                                                                          {item.correo}</span> | <span> TEL: {item.telefono}
                                                                        </span>
                                                                    </div>
                                                                </CTableDataCell>

                                                                <CTableDataCell className="text-center">
                                                            <h5>{item.asociacion}</h5>
                                                                </CTableDataCell>

                                                                <CTableDataCell>
                                                                    <div className="small text-medium-emphasis">Municipio/Ciudad</div>
                                                                  <strong>{item.Municipio }</strong>
                                                                </CTableDataCell>
                                                              <CTableDataCell>
                                                            <div className="small text-medium-emphasis">Barrio/Vereda</div>
                                                              <span>
                                                              {item.barrio_vereda}</span> | <span> Dir: {item.direccion}
                                                            </span>
                                                              </CTableDataCell>
                                                              <CTableDataCell>
                                                                    <div className="small text-medium-emphasis">
                                                                        <CTooltip
                                                                            content="Actulizar Empleado"
                                                                            placement="bottom"
                                                                        >
                                                                            <CButton style={{ 'width': '100%' }}
                                                                                color="info"
                                                                                variant="outline"
                                                                                size="lg"
                                                                                onClick={() => EditarAutoridad(item.ID)}
                                                                            >
                                                                                {'Corregir Autoridad'}
                                                                            </CButton></CTooltip>
                                                                    </div>
                                                                </CTableDataCell>
                                                                <CTableDataCell>
                                                                    <div className="small text-medium-emphasis">
                                                                        <CTooltip
                                                                            content="Eliminar Empleado"
                                                                            placement="bottom"
                                                                        >
                                                                            <CButton style={{ 'width': '100%' }}
                                                                                color="danger"
                                                                                variant="outline"
                                                                                size="lg"
                                                                                onClick={() => eliminarAutoridadT(item.ID)}
                                                                            >
                                                                                <CIcon icon={cilTrash} size="lg" />
                                                                            </CButton></CTooltip>
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

          <AutoridadTNuevoCrear
                   visibleAT={visibleAT}
                   setVisibleAT={setVisibleAT}
                  />
          <FormAutoridadActModal
                  visibleEAT={visibleEAT}
                  setVisibleEAT={setVisibleEAT}
                  datoAutoridad={datoAutoridad}
                  onChangeFormulario={onChangeFormulario}
                  setValidated = {setValidated}
                  />
        </CRow>
    )
}
export default AutoridadT
