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
  CFormSelect,
  CSpinner,
  CTooltip, 
} from '@coreui/react'
import { NucleoFamiliarForm } from 'src/hooks/useNucleoFamiliarForm'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilLockUnlocked, cilPeople, cilTrash } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'

const NucleoFamiliar = () => {
  const [selectServicio] = useState(1);
  const [mostrarJefeHByID, setMostrarJefeHByID] = useState(false)
  const [habilitarAgregar, setHabilitarAgregar] = useState(false)
  const [nuevaListaHogar, setNuevaListaHogar] = useState([])
 
 
  const { 
    jefeHogarByID, 
    jefeHogarById
   } = JefeHogarForm()

   const {
    obtenerNucleoFamiliar,
    obtenertipodocumento,
    obtenerParentesco,
    obtenerEscolaridad,
    obtenerOrientacionSexual,
    tipodocumento,
    onChangeFormulario,
    handleSubmit,
    nucleoFamiliar,
    parentesco,
    escolaridades,
    orientacion_sexuales,
    cargandolista,
    setDatoNucleoFamiliar,
    datoNucleoFamiliar,
    setIdJefeHogar,
    setNombreBotoGuardarActulizar,
    handleSubmitAct,
    nombreBotoGuardarActulizar,
    validated
  
  } = NucleoFamiliarForm();
  const { id } = useParams()

  useEffect(() => {
    obtenerNucleoFamiliar()
    obtenerParentesco()
    obtenerEscolaridad()
    obtenerOrientacionSexual()
    obtenertipodocumento()

  }, []);


  useEffect(() => {
    if (id) {
      setMostrarJefeHByID(true)
      setHabilitarAgregar(false)
      jefeHogarByID(id)
      setIdJefeHogar(id)
     } else {
      setMostrarJefeHByID(false)
      setHabilitarAgregar(true)
    }
    
  }, [id])
  useEffect(() => {
    setNuevaListaHogar(nucleoFamiliar?.filter(item => item?.ID_jefehogar === id));
  }, [nucleoFamiliar, id]);

  const EditarFamiliar = (event, item) => {

    event.preventDefault();
    setNombreBotoGuardarActulizar('Actualizar Concejo Comunitario');

    setDatoNucleoFamiliar({
      ID: item.ID,
      Id_jefe_hogar: item.ID_jefehogar,
      Id_parentesco: item.id_parentesco,
      Id_tipo_documento:item.id_tipo_documento,
      Id_escolaridad:item.id_escolaridad,
      Id_orientacion_sexual: item.id_orientacion_sexual,
      Documentos:item.documentos,
      Nombres:item.nombres,
      Apellidos:item.apellidos,
      Estado_escolaridad:item.estado_escolaridad,
      Sexo:item.sexo,
      Genero:item.genero,
      Fecha_nacimiento: item.fecha_nacimiento

    })
  };


  const eliminarFamiliar = (item) => {
    console.log(item)
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
                  {
                  
                    <>
                    <strong>
                        {jefeHogarById?.nombres} {jefeHogarById?.apellidos}
                      </strong>
                      <div className="small text-medium-emphasis">
                        <span> Identidad: {jefeHogarById?.documentos}</span>
                      </div>
                      
                    </>
                        
                    
                  }
                
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
          <CForm onSubmit={handleSubmit}
            noValidate
            validated={validated}>
            <div className="row">
              <div className="col-md-4">
                <CFormSelect
                  type='text'
                  id="Id_tipo_documento"
                  name="Id_tipo_documento"
                  placeholder="Tipo Documento"
                  value={datoNucleoFamiliar.Id_tipo_documento}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Tipo Documento</option>
                {tipodocumento?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      tipodocumento?.filter(item => item.Estado !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
              </div>
              <div className="col-md-4">
                <CFormInput
                  type="number"
                  id="Documentos"
                  name="Documentos"
                  placeholder="Documento"
                  value={datoNucleoFamiliar.Documentos}
                  onChange={onChangeFormulario}
                  required
                />
              </div>
              <div className="col-md-4">
                <CFormSelect
                  type="text"
                  id="Id_parentesco"
                  name="Id_parentesco"
                  placeholder="Parentesco"
                  value={datoNucleoFamiliar.Parentesco}
                  onChange={onChangeFormulario}
                  required>
                    <option key={'0'} value={''}>Tipo Parentesco</option>
                {parentesco?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      parentesco?.filter(item => item.Estado !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
              </div>
           
            </div>
            <br/>
            <div className='row'>
              <div className='col-md-6'>
              <CFormInput
                  type="text"
                  id="Nombres"
                  name="Nombres"
                  placeholder="Nombres"
                  value={datoNucleoFamiliar.Nombres}
                  onChange={onChangeFormulario}
                  required
                />
              </div>
              <div className='col-md-6'>
              <CFormInput
                  type="text"
                  id="Apellidos"
                  name="Apellidos"
                  placeholder="Apellidos"
                  value={datoNucleoFamiliar.Apellidos}
                  onChange={onChangeFormulario}
                  required
                />
              </div>
            </div>
            {/* otro */}
            <br/>
            <div className="row">
              <div className='col-md-4'>
                <CFormInput
                  type="Date"
                  id="Fecha_nacimiento"
                  name='Fecha_nacimiento'
                  value={datoNucleoFamiliar.Fecha_nacimiento}
                  placeholder="Fecha de Nacimiento"
                  onChange={onChangeFormulario}
                  required />
              </div>
              <div className="col-md-4">
                <CFormSelect
                  type='text'
                  id="Id_escolaridad"
                  name="Id_escolaridad"
                  placeholder="Escolaridad"
                  value={datoNucleoFamiliar.Id_escolaridad}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Escolaridad</option>
                {escolaridades?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      escolaridades?.filter(item => item.ID
                        !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
              </div>
              <div className="col-md-4">
                <CFormSelect
                  id="Estado_escolaridad"
                  name='Estado_escolaridad'
                  value={datoNucleoFamiliar.Estado_escolaridad}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Estado Escolaridad...</option>
                  <option value={'Terminado'}>Terminado</option>
                  <option value={'Cursando'}>Cursando</option>
                  <option value={'Retirado'}>Retirado</option>
                </CFormSelect>
              </div>
         
           
            </div>
            {/* otro */}
            <br/>
            <div className="row">
              <div className='col-md-4'>
                <CFormSelect
                  id="Genero"
                  name='Genero'
                  value={datoNucleoFamiliar.name}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Genero...</option>
                  <option value={'Mujer'}>Mujer</option>
                  <option value={'Hombre'}>Hombre</option>
                </CFormSelect>
              </div>
              <div className="col-md-4">
                <CFormSelect
                  id="Id_orientacion_sexual"
                  name='Id_orientacion_sexual'
                  value={datoNucleoFamiliar.Id_orientacion_sexual}
                  onChange={onChangeFormulario}
                  required>
                  <option key={''} value={''}>Orientación Sexual...</option>
                  {orientacion_sexuales?.length === 0
                    ? <option key={''} value={''}>Seleccione...</option>
                    : (
                      orientacion_sexuales?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
              </div>
              <div className="col-md-4">
                <CFormSelect
                  id="validationCustom11"
                  name='Sexo'
                  value={datoNucleoFamiliar.Sexo}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Sexo...</option>
                  <option value={'Femenino'}>Femenino</option>
                  <option value={'Masculino'}>Masculino</option>
                </CFormSelect>
              </div>
         
           
            </div>
            
            <br/>
            <CButton
                  type="button"
                  color={'primary'}
                  variant="outline"
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={nombreBotoGuardarActulizar === 'Agregar Nuevo Nucleo Familiar' ? handleSubmit : handleSubmitAct}
                >
                  {nombreBotoGuardarActulizar}
                </CButton>
          </CForm>
          <br/>
          <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} >Datos Nucleo Familiar</CTableHeaderCell>
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
                 
                    nuevaListaHogar?.map((item, index) => (

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
                                onClick={(event) => EditarFamiliar(event, item)}
                              >
                                {'Editar'}
                              </CButton>
                              </CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                         
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
                                onClick={() => eliminarFamiliar(item.ID)}
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
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NucleoFamiliar
