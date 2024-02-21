/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import FormMiembrosModal from './modal/FormMiembrosModal'

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
import { MiembroForm } from 'src/hooks'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  cilLockLocked,
  cilLockUnlocked,
  cilPeople,
  cilTrash,
} from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'
import FormMiembrosActModal from './modal/FormMiembrosActModal'



const WidgetBarChart = () => {
  

  const [selectServicio] = useState(1);
  const [nombreEscolaridad, setNombreEscolaridad] = useState([]);

  const {
    onChangeFormulario,
    handleSubmitAct,
    obtenerMiembro,
    obtenerConcejo,
    obtenerEscolaridad,
    eliminarMiembro,
    EditaMiembro,
    datoMiembro,
    miembro,
    escolaridades,
    obtenerOrientacionSexual,
    orientacion_sexuales,
    visibleM,
    setVisibleM,
    visibleMI,
    setVisibleMI,
    cargandolista,
  } = MiembroForm()


  useEffect(() => {
    obtenerConcejo();
    obtenerMiembro();
    obtenerEscolaridad()
    obtenerOrientacionSexual()

      // eslint-disable-next-line
  }, []);

  useEffect(()=>{
    obtenerNombre()
   
  },[miembro])

 

  const obtenerNombre = () => {
    const miembrosConOrientacionSexual = miembro.map(orientacion => {
      const orientacionSexuales = orientacion_sexuales.find(item => item.ID === orientacion.id_orientacion_sexual)
      const nombreOrientacionSexual = orientacionSexuales ? orientacionSexuales.Nombre : "No encontrado";
      return { ...orientacion, nombreOrientacionSex: nombreOrientacionSexual };
  
    });
  
    const miembrosConEscolaridad = miembrosConOrientacionSexual.map(miembr => {
      const escolaridad = escolaridades.find(item => item.ID === miembr.id_escolaridad);
      const escolaridadNombre = escolaridad ? escolaridad.Nombre : "No encontrado";
      return { ...miembr, nombre_escolaridad: escolaridadNombre };
    });
  
    setNombreEscolaridad(miembrosConEscolaridad);
  }



  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gestión</strong> <small>Miembros Consejo</small>
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
                  onClick={() => setVisibleM(true)}
                >{' '}
                  {'Agregar Nuevo Miembros Consejo'}
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
                    <CTableHeaderCell colSpan={1} >Datos Miembro Consejo</CTableHeaderCell>
                    {/* <CTableHeaderCell colSpan={2} className="text-center">Consejo</CTableHeaderCell> */}
                    <CTableHeaderCell colSpan={1} className="text-center">Escolaridad</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Estado Escolaridad</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Genero</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Ubicación</CTableHeaderCell>
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
                 
                    nombreEscolaridad?.map((item, index) => (

                      <CTableRow v-for="item in tableItems" key={index}>

                        <CTableDataCell className="text-center">
                          <CAvatar size="md"
                            key={index}
                            src={avatar}
                            status={item.estado === true ? 'success' : 'secondary'}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>
                            <span> <strong>
                              {item.nombres} {item.apellidos}
                            </strong></span><br></br>
                            <small style={{ marginLeft: '5px' }}>
                              {item.Tipo_documento}{item.documentos}
                            </small>
                          </div>
                          <div className="small text-medium-emphasis">
                            <span>
                              {item.correo}</span> | <span> TEL: {item.telefono}
                            </span>
                          </div>
                        </CTableDataCell>
                        {/* <CTableDataCell className="text-center">
                          <h5>{item.asociacion}</h5>
                        </CTableDataCell> */}
                        <CTableDataCell>
                        <div className="small text-medium-emphasis">Escolaridad/Estado</div>
                          <strong>{
                            item.nombre_escolaridad
                          }</strong> |     <strong>{
                            item.estado_escolaridad
                          }</strong>
                        </CTableDataCell>
                       

                        {/* <CTableDataCell>
                          <div className="small text-medium-emphasis">Municipio/Ciudad</div>
                          <strong>{
                            item.municipio
                          }</strong>
                        </CTableDataCell> */}
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Sexo/Genero/Sexualidad</div>
                          <span>
                            {item.sexo}</span> | <span> Gen: {item.genero} | <span>Ori Sex: {item.nombreOrientacionSex}</span>
                          </span>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Barrio/Vereda</div>
                          <span>
                            {item.Veredas_Barrios}</span> | <span> Dir: {item.direccion} | <span>Corrg: {item.Corregimiento}</span>
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
                                onClick={() => EditaMiembro(item.ID)}
                              >
                                {'Editar'}
                              </CButton></CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content={item.estado === true ? 'Desactivar' : 'Activar'}
                              placement="bottom"
                            >
                              {selectServicio !== 1 ? (
                                <CLoadingButton
                                  variant="outline"
                                  size="lg"
                                  color={item.estado === true ? 'secondary' : 'success'}
                                  style={{ 'width': '100%' }}
                                  timeout={2000}
                                >
                                </CLoadingButton>
                              ) : (
                                <CButton
                                  size="lg"
                                  color={item.estado === true ? 'success' : 'secondary'}
                                  style={{ 'width': '100%' }}
                                  id={`estado${1}`}
                                // key={item.IdConvenio}
                                //onClick={() => handleSelectEst(item.IdConvenio)}
                                >
                                  {item.estado === true
                                    ? <CIcon icon={cilLockUnlocked} size="lg" />
                                    : <CIcon icon={cilLockLocked} size="lg" />
                                  }
                                </CButton>
                              )}

                            </CTooltip>
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
                                onClick={() => eliminarMiembro(item.ID)}
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
      <FormMiembrosModal
        visibleM={visibleM}
        setVisibleM={setVisibleM}
                                  
      />
      <FormMiembrosActModal
       visibleMI={visibleMI}
       setVisibleMI={setVisibleMI}
        datoMiembro={datoMiembro}
        onChangeFormulario={onChangeFormulario}
        handleSubmitAct = {handleSubmitAct}
      />
    </CRow>
  )
}
export default WidgetBarChart
