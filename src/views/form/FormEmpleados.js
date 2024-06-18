/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useEffect } from 'react'
import EmpleadoModalCrear from './modal/FormEmpleadoNuevoModal'
import EmpleadoModalActualiza from './modal/FormEmpleadoActModal'

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
import { EmpleadoForm } from 'src/hooks'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
    cilLockLocked,
    cilLockUnlocked,
    cilPeople,
    cilTrash,
} from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'
import { useState } from 'react'

const AdminConvenios = () => {
    const {
        obtenerEmpleado,
        eliminarEmpleado,
        EditaEmpleado,
        /* metodos */
        empleados,
        visibleE, setVisibleE,
        visibleEM, setVisibleEM,
        setValidated,
        datoEmpleado,
        cargandolista,
        onChangeFormulario,
        handleSubmitAct,
    } = EmpleadoForm()

   useEffect(() => {
        // Consultar la api listar parques

        obtenerEmpleado();
        // eslint-disable-next-line
    }, []);
   useEffect(() => {
        // Consultar la api listar parques

     setVisibleE(false)
        // eslint-disable-next-line
    }, [empleados]);

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
              <strong>Gestión</strong> <small>Empleado asociación</small>
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
                                    onClick={() => setVisibleE(true)}
                                >{' '}
                                 {'Agregar Nuevo Empleado asociación'}
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                    {/* proceso de listar archovos de las normativas */}
                    <CCardBody>
                                        <CForm key={0}>
                                            <CTable align="middle" className="mb-0 border" hover responsive>
                                                <CTableHead color="light">
                                                    <CTableRow>
                                                        <CTableHeaderCell className="text-center">
                                                        <CIcon icon={cilPeople} />
                                                        </CTableHeaderCell>
                                                        <CTableHeaderCell colSpan={1}>Datos Empleado</CTableHeaderCell>
                                                        <CTableHeaderCell colSpan={1}  className="text-center">Asociacion</CTableHeaderCell>
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
                                                      empleados?.map((item, index) => (
                                                         <CTableRow v-for="item in tableItems" key={index}>
                                                                <CTableDataCell className="text-center">
                                                                    <CAvatar size="md"
                                                                        key={index}
                                                                        src={avatar}
                                                                        status={item.estado === '1' ? 'success' : 'secondary'}
                                                                    />
                                                                </CTableDataCell>
                                                                <CTableDataCell>
                                                                    <div>
                                                                        <span> <strong>
                                                                          { item.nombres } {item.apellidos}
                                                                        </strong></span><br></br>
                                                                        <small style={{ marginLeft: '5px' }}>
                                                                         C.C: {item.documentos}
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
                                                                  <strong>{
                                                              item.municipio
                                                                    }</strong>
                                                                </CTableDataCell>
                                                              <CTableDataCell>
                                                            <div className="small text-medium-emphasis">Barrio/Vereda/Direccion</div>
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
                                                                                onClick={() => EditaEmpleado(item.ID)}
                                                                            >
                                                                                {'Editar'}
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
                                                                                color={parseInt(item.id_Perfil) === 1
                                                                                  ? 'secondary'
                                                                                  : 'danger'}
                                                                                variant="outline"
                                                                                size="lg"
                                                                                disabled={parseInt(item.id_Perfil)  === 1
                                                                                  ? true
                                                                                  : false}
                                                                               onClick={() => eliminarEmpleado(item.ID)}
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

       <EmpleadoModalCrear
          visibleE={visibleE}
          setVisibleE={setVisibleE}
            />
            <EmpleadoModalActualiza
                visibleEM={visibleEM}
                setVisibleEM={setVisibleEM}
                datoEmpleado={datoEmpleado}
                onChangeFormulario={onChangeFormulario}
                handleSubmitAct={handleSubmitAct}
                setValidated={setValidated}
            />
        </CRow>
    )
}
export default AdminConvenios
