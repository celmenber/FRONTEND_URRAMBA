/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { ContactoAsunto } from 'src/hooks'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormFeedback,
    CFormLabel,
    CFormSelect,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CSpinner,
} from '@coreui/react'
import { CLoadingButton } from '@coreui/react-pro'
import { useEffect } from 'react'


const AsuntoContacto = () => {

const {
    onChangeFormulario,
    handleSubmit,
    handleReset,
    ObtenerContactoAsunto,
    datoAsunto,
    cargando,
    cargandolista,
    selectActivar,
    setSelectActivar,
    EliminarAsunto,
    EstadoAsunto,
    EditaAsunto,
    asuntocontacto,
    valedita,
    validated
} = ContactoAsunto()

const [selectServicio, setSelectServicio] = useState(1);

    useEffect(() => {
        // Consultar la api listar Tenerencuenta
        ObtenerContactoAsunto();
        // eslint-disable-next-line
    }, []);

    const handleSelect = ((id) => {
        setSelectActivar(true);
        setSelectServicio(id);
        EstadoAsunto(id);
    });

    return (
        <><CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Administración Asuntos</strong> <small>Contactanos</small>
                    </CCardHeader>
                    <CCardBody>
                       {/*  <p className="text-medium-emphasis small">
                            Custom feedback styles apply custom colors, borders, focus styles, and background
                            icons to better communicate feedback.
                        </p> */}
                        <CForm
                            className="row g-3 needs-validation"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <CCol md={3}>
                                <CFormLabel htmlFor="validationCustom01">Estado</CFormLabel>
                                <CFormSelect 
                                id="validationCustom01" 
                                name='estado'
                                value={datoAsunto.estado}
                                onChange={onChangeFormulario}
                                required>
                                    <option value={''}>Seleccione...</option>
                                    <option value={true}>Activar</option>
                                    <option value={false}>Desactivar</option>
                                </CFormSelect>
                                <CFormFeedback invalid>El campo Estado es Requerido.</CFormFeedback>
                            </CCol>
                            <CCol md={8}>
                                <CFormLabel htmlFor="validationCustom02">Nombre o Descripción del asunto</CFormLabel>
                                <CFormInput 
                                type="text" 
                                id="validationCustom02" 
                                name='asunto' 
                                    value={datoAsunto.asunto}
                                onChange={onChangeFormulario}
                                required />
                                <CFormFeedback invalid>Descripción del asunto es requerido!</CFormFeedback>
                            </CCol>
                            
                                <CCol xs={11}>
                                    <CCol xs={12}>
                                        {cargando === true ? (
                                            <CLoadingButton
                                                color="success"
                                                variant="outline"
                                                style={{ width: '100%' }}
                                                timeout={2000}
                                            >
                                                {' '}
                                            {valedita === false ? 'Enviando datos Asunto' : 'Actulizando datos Asunto'}
                                            </CLoadingButton>
                                        ) : (
                                            <>
                                                <CRow>
                                                    <CCol xs={9}>
                                                        <CButton
                                                            type="submit"
                                                            color={valedita === false ? 'success' : 'primary'}
                                                            className="px-4"
                                                            style={{ width: '100%' }}
                                                        >
                                                            {' '}
                                                            {valedita === false ? 'Enviar datos Asuntos ' : 'Actualizar datos Asuntos '}
                                                        </CButton>
                                                    </CCol>
                                                    <CCol xs={3}>
                                                        <CButton
                                                            type="button"
                                                            color={valedita === false ? 'light' : 'dark'}
                                                            className="px-4"
                                                            style={{ width: '100%' }}
                                                            onClick={() => handleReset()}
                                                        >
                                                            {' '}
                                                            {valedita === false ? 'Nuevo Registro' : 'Cancelar Edición'}
                                                        </CButton>

                                                    </CCol>
                                                </CRow>
                                            </>
                                        )}
                                    </CCol>
                                </CCol>

                            <CCol xs={12}>
                                <CRow>
                                    <CCol xs={11}>
                                        <CTable>
                                            <CTableHead>
                                                <CTableRow>
                                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col">Nombre Asuntos</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Estado</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col" style={{textAlign:'center'}} colSpan={2}>...</CTableHeaderCell>
                                                </CTableRow>
                                            </CTableHead>
                                            <CTableBody>
                                                {cargandolista === true ? (
                                                    <>
                                                        <CTableRow key={0} >
                                                            <CTableHeaderCell colSpan={8} className="text-center">
                                                                <CSpinner aria-hidden="true" />
                                                                <span style={{
                                                                    top: '-10px',
                                                                    position: 'relative'
                                                                }}> Loading...</span>
                                                            </CTableHeaderCell>
                                                        </CTableRow>
                                                    </>
                                                ) : (
                                                    asuntocontacto?.map((item, index) => (
                                                         <CTableRow key={index}>
                                                            <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                                            <CTableDataCell style={{ 'width': '70%' }}>{item.NombreAsunto}</CTableDataCell>
                                                            <CTableDataCell style={{ 'width': '15%' }}>
                                                                {selectServicio === item.Id && selectActivar === true ? (
                                                                    <CLoadingButton
                                                                        variant="outline"
                                                                        color="success"
                                                                        style={{ width: '100%' }}
                                                                        timeout={2000}
                                                                    >{' '}
                                                                      {'Cambiando...'}
                                                                    </CLoadingButton>
                                                                ) : (
                                                                    <CButton
                                                                        variant="outline"
                                                                        color={item.EstadoAsunto === true ? 'success' : 'danger'}
                                                                        className="px-4"
                                                                        style={{ width: '100%' }}
                                                                        id={`estado${item.Id}`}
                                                                        key={item.Id}
                                                                        onClick={() => handleSelect(item.Id)}
                                                                    >{' '}
                                                                        {item.EstadoAsunto === true
                                                                        ? 'Activado'
                                                                        : 'Desactivado'
                                                                     }
                                                                    </CButton>
                                                                )}
                                                                
                                                                </CTableDataCell>
                                                            <CTableDataCell>
                                                                <CButton 
                                                                color="info" 
                                                                variant="outline"
                                                                onClick={() => EditaAsunto(item.Id)}
                                                                >Editar</CButton>
                                                                </CTableDataCell>
                                                            <CTableDataCell>
                                                                <CButton 
                                                                color="danger" 
                                                                variant="outline"
                                                                onClick={() => EliminarAsunto(item.Id)}
                                                                >
                                                                Eliminar
                                                                </CButton></CTableDataCell>
                                                         </CTableRow>
                                                     ))
                                                 )}
                                            </CTableBody>
                                        </CTable>
                                    </CCol>
                                </CRow>
                            </CCol>
                        </CForm>

                    </CCardBody>

                </CCard>
            </CCol>
        </CRow>
        </>
    )
}
export default AsuntoContacto
