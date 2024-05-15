/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { ConcejoForm } from '../../hooks'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormFeedback,
  CSpinner,
  CTooltip,
  CCardTitle,
  CCollapse,
} from '@coreui/react'
import { CLoadingButton } from '@coreui/react-pro';
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'

const FormConcejo = () => {
   const [visible, setVisible] = useState(false)
  const {
    handleSubmit,
    onChangeFormulario,
    obtenerConcejo,
    obtenerMunicipio,
    obtenerAutoridadT,
    obtenerAsociacion,
    EliminarConcejo,
    Concejo,
    Municipio,
    Asociaciones,
    Autoridad,
    cargandolista,
    cargando,
    validated,
    datoConcejo,
    setDatoconcejo,
    handleActualizarConcejo,
    nombreBotoGuardarActulizar,
    setNombreBotoGuardarActulizar
  } = ConcejoForm();

  useEffect(() => {
    // Consultar la api listar Municipio,
    obtenerConcejo();
    obtenerAutoridadT();
    obtenerMunicipio();
    obtenerAsociacion();
    // eslint-disable-next-line
  }, []);

 const EditaConsejo = (event, item) => {
    event.preventDefault();
    setNombreBotoGuardarActulizar('Actualizar Concejo Comunitario');
    setDatoconcejo({
      ID: item.ID,
      nitConcejo: item.nit,
      nombreAsociacion: item.nombre_concejo_comunitario,
      id_asociacion: item.id_asociacion,
      id_autoridad_tradicional: item.id_autoridad_tradicional,
      idMunicipio: item.id_municipio,
    });
    setVisible(true);
  };

  //console.log(Autoridad)

  return (
    <><CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Concejos Comunitarios</strong> <small>Negritudes</small>
          </CCardHeader>
          <CCardBody>
               <CButton onClick={() => setVisible(!visible)} color="secondary" style={{ width: '100%' }}>
                  {visible ? 'Cerrar Formulario' : 'Abrir Formulario'}
              </CButton>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
             <CCollapse visible={visible}>
            <CRow className="mt-4">
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom01">Nit </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom01"
                  defaultValue=""
                  name='nitConcejo'
                  value={datoConcejo.nitConcejo}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nit Requerido!</CFormFeedback>
              </CCol>
              <CCol md={9}>
                <CFormLabel htmlFor="validationCustom02">Nombre Concejo Comunitario </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom02"
                  defaultValue=""
                  name='nombreAsociacion'
                  value={datoConcejo.nombreAsociacion}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El Nombre Concejo Comunitario Requerido!</CFormFeedback>
               </CCol>
             </CRow>
              <CRow className="mt-3">
              <CCol xs={4}>
                <CFormLabel htmlFor="validationCustom03" value={''}>Asociacion</CFormLabel>
                <CFormSelect
                  key={'validationCustom03'}
                  name='id_asociacion'
                  id="idAsociacion"
                  value={datoConcejo.id_asociacion}
                  onChange={onChangeFormulario}
                  required
                >
                  <option key={'validationCustom0010'} value={''}>Seleccione...</option>
                    {Asociaciones?.length === 0
                    ? <option key={'validationCustom0011'} value={0}>Seleccione...</option>
                    : (
                      Asociaciones?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                  <CFormFeedback invalid>Seleccione Asociación por favor.</CFormFeedback>
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="validationCustom04" value={''}>Autoridad Afro</CFormLabel>
                  <CFormSelect
                    key={'validationCustom04'}
                    name='id_autoridad_tradicional'
                    id="idAutoridad_tradicional"
                    value={datoConcejo.id_autoridad_tradicional}
                    onChange={onChangeFormulario}
                    required
                  >
                    <option key={'validationCustom001'} value={''}>Seleccione...</option>
                    {Autoridad?.length === 0
                      ? <option key={'validationCustom002'} value={0}>Seleccione...</option>
                      : (
                        Autoridad?.filter(item => item.Estado !== '0').map(item => (
                          <option
                            key={item.ID}
                            value={item.ID}
                            >
                            {item.nombres+" "+item.apellidos}
                          </option>
                        ))
                      )}
                  </CFormSelect>
                  <CFormFeedback invalid>Seleccione Autoridad tradicional por favor.</CFormFeedback>
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="validationCustom05" value={''}>Municipio</CFormLabel>
                  <CFormSelect
                    key={'validationCustom05'}
                    name='idMunicipio'
                    id="idMunicipio"
                    value={datoConcejo.idMunicipio}
                    onChange={onChangeFormulario}
                    required
                  >
                    <option key={'validationCustom001'} value={''}>Seleccione...</option>
                    {Municipio?.length === 0
                      ? <option key={'validationCustom002'} value={0}>Seleccione...</option>
                      : (
                        Municipio?.filter(item => item.Estado !== null).map(item => (
                          <option
                            key={item.ID}
                            value={item.ID}
                          >
                            {item.Nombre}
                          </option>
                        ))
                      )}
                  </CFormSelect>
                  <CFormFeedback invalid>Seleccione Municipio por favor.</CFormFeedback>
                </CCol>
                </CRow>
                <CRow className="mt-4">
                    <CCol xs={12}>
                      {cargando === true ? (
                        <CLoadingButton
                          color="success"
                          variant="outline"
                          style={{ width: '100%' }}
                          timeout={2000}
                        >
                          {' '}
                          Enviando Concejo Comunitario
                        </CLoadingButton>
                      ) : (
                        <CButton
                        type="button"
                        color={'primary'}
                        variant="outline"
                        className="px-4"
                        style={{ width: '100%' }}
                        onClick={nombreBotoGuardarActulizar === 'Agregar Nuevo Concejo Comunitario' ? handleSubmit : handleActualizarConcejo}
                      >
                        {nombreBotoGuardarActulizar}
                      </CButton>
                      )}
                    </CCol>
              </CRow></CCollapse>

              <CCol xs={12}>
                <hr />
                <CRow>
                  <CCol xs={12}>
                    {Concejo.length === 0 ? (
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell colSpan={8} className="text-center">
                              <h3>No hay datos </h3>
                            </CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                      </CTable>
                    ) : (
                      <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                          <CTableRow>
                            <CTableHeaderCell>Concejos</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Asociacion</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Municipio</CTableHeaderCell>
                            <CTableHeaderCell colSpan={2} className="text-center">Acciones</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {cargandolista === true ? (
                            <CTableRow key={0}>
                              <CTableHeaderCell colSpan={8} className="text-center">
                                <CSpinner aria-hidden="true" />
                                <span
                                  style={{
                                    top: '-10px',
                                    position: 'relative',
                                  }}
                                >
                                  {' '}
                                  Loading...
                                </span>
                              </CTableHeaderCell>
                            </CTableRow>
                          ) : (
                              Concejo.map((item, index) => (
                              <CTableRow v-for="item in tableItems" key={index}>
                                <CTableDataCell>
                                    <div><b>{item.nombre_concejo_comunitario}</b></div>
                                  <div className="small text-medium-emphasis">
                                    NIT:<span>{item.nit}</span>  |  Autoridad tradicional: {' '}
                                      {item.nombres} {item.apellidos}
                                  </div>
                                  <div className="small text-medium-emphasis">
                                    <span>{item.direccion}</span>
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell className="text-center">
                                    <div>{item.Nombre}</div>
                                </CTableDataCell>
                                  <CTableDataCell className="text-center">
                                  {item.Municipio}
                                </CTableDataCell>
                                  <CTableDataCell>
                                    <div className="small text-medium-emphasis">
                                      <CTooltip
                                        content="Actualizar Concejo"
                                        placement="bottom"
                                      >
                                        <CButton style={{ 'width': '100%' }}
                                          color="info"
                                          variant="outline"
                                          size="lg"
                                          onClick={(event) => EditaConsejo(event, item)}
                                        >
                                          {'Corregir Concejo Comunitario'}
                                        </CButton></CTooltip>
                                    </div>
                                  </CTableDataCell>
                                  <CTableDataCell>
                                    <div className="small text-medium-emphasis">
                                      <CTooltip
                                        content="Eliminar Concejo"
                                        placement="bottom"
                                      >
                                        <CButton style={{ 'width': '100%' }}
                                          color="danger"
                                          variant="outline"
                                          size="lg"
                                          onClick={() => EliminarConcejo(item.ID)}
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
                    )}
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
export default FormConcejo
