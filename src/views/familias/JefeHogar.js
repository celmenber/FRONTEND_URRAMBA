/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'


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

import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  cilLockLocked,
  cilLockUnlocked,
  cilPeople,
  cilTrash,
  cilArrowThickFromLeft,
} from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'

import JefeHogarNuevo from './modal/JefeHogarNuevo'
import JefeHogarAct from './modal/JefeHogarAct'
import { JefeHogarForm } from 'src/hooks/useJefeHogarForm'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const JefeHogar = () => {
   const [selectServicio] = useState(1);
  const [nombreEscolaridad, setNombreEscolaridad] = useState([]);
  const history = useHistory();

  const {
    onChangeFormulario,
    handleSubmitAct,
    obtenerJefeHogar,
    obtenerConcejo,
    obtenerEscolaridad,
    eliminarJefeHogar,
    EditarJefeHogar,
    datoJefeHogar,
    jefeHogar,
    escolaridades,
    obtenerOrientacionSexual,
    orientacion_sexuales,
    visibleM,
    setVisibleM,
    visibleMI,
    setVisibleMI,
    setValidated,
    cargandolista,
  } = JefeHogarForm()

  useEffect(() => {
    obtenerConcejo();
    obtenerJefeHogar(); 
    obtenerEscolaridad()
    obtenerOrientacionSexual()

      // eslint-disable-next-line
  }, []);

  useEffect(()=>{  
    obtenerNombre();
    setVisibleM(false)
   // eslint-disable-next-line
  },[jefeHogar])

  const obtenerNombre = () => {
    
    const jefeHogarConOrientacionSexual = jefeHogar?.map(orientacion => {
      const orientacionSexuales = orientacion_sexuales?.find(item => item?.ID === orientacion?.id_orientacion_sexual)
      const nombreOrientacionSexual = orientacionSexuales ? orientacionSexuales.Nombre : "No encontrado";
      return { ...orientacion, nombreOrientacionSex: nombreOrientacionSexual };
  
    });
  
    const jefeHogarConEscolaridad = jefeHogarConOrientacionSexual.map(jefe => {
      const escolaridad = escolaridades.find(item => item.ID === jefe.id_escolaridad);
      const escolaridadNombre = escolaridad ? escolaridad.Nombre : "No encontrado";
      return { ...jefe, nombre_escolaridad: escolaridadNombre };
    });
  
    setNombreEscolaridad(jefeHogarConEscolaridad);
  }

  const idJefeHogar = (id) => {

    history.push(`/familias/nucleos/${id}`);
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gestión</strong> <small>Jefe de hogar</small>
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
                  {'Agregar Nuevo Jefe de Hogar'}
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
                    <CTableHeaderCell colSpan={1} >Datos Jefe de Hogar</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Escolaridad</CTableHeaderCell>
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
                            status={item.estado === '1' ? 'success' : 'secondary'}
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
                              content="Actulizar Miembro"
                              placement="bottom"
                            >
                              <CButton style={{ 'width': '100%' }}
                                color="info"
                                variant="outline"
                                size="lg"
                                onClick={() => EditarJefeHogar(item.ID)}
                              >
                                {'Editar'}
                              </CButton>
                              </CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                          {console.log({selectServicio})}
                            <CTooltip
                              content={item.estado === '1' ? 'Activo ' : 'Desactivo'}
                              placement="bottom"
                            >
                             
                              {selectServicio !== 1 ? (
                                <CLoadingButton
                                  variant="outline"
                                  size="lg"
                                  color={item.estado === '1' ? 'secondary' : 'success'}
                                  style={{ 'width': '100%' }}
                                  timeout={2000}
                                >
                                </CLoadingButton>
                              ) : (
                                <CButton
                                  size="lg"
                                  color={item.estado === '1' ? 'success' : 'secondary'}
                                  style={{ 'width': '100%' }}
                                  id={`estado${1}`}
                                 >
                                  {item.estado === '1'
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
                              content="Eliminar Miembro"
                              placement="bottom"
                            >
                              <CButton style={{ 'width': '100%' }}
                                color="danger"
                                variant="outline"
                                size="lg"
                                onClick={() => eliminarJefeHogar(item.ID)}
                              >
                                <CIcon icon={cilTrash} size="lg" />
                              </CButton></CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content="Ir Nucleo Filia"
                              placement="bottom"
                            >
                              <CButton style={{ 'width': '100%' }}
                                color="primary"
                                variant="outline"
                                size="lg"
                                onClick={() => idJefeHogar(item.ID)}
                              >
                                <CIcon icon={cilArrowThickFromLeft} size="lg" />
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
      <JefeHogarNuevo
        visibleM={visibleM}
        setVisibleM={setVisibleM}
                                  
      />
      <JefeHogarAct
       visibleMI={visibleMI}
       setVisibleMI={setVisibleMI}
        datoJefeHogar={datoJefeHogar}
        onChangeFormulario={onChangeFormulario}
        handleSubmitAct = {handleSubmitAct}
        setValidated = {setValidated}
      />
    </CRow>
  )
}
export default JefeHogar
