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
  
  const [formData, setFormData] = useState({  
    Id_jefe_hogar:'',
    Id_parentesco: '',
    Id_tipo_documento:'',
    Id_escolaridad:'',
    Id_orientacion_sexual: '',
    Documentos:'',
    Nombres:'',
    Apellidos:'',
    Estado_escolaridad:'',
    Sexo:'',
    Genero:'',
    Fecha_nacimiento: new Date()
   })

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
    // obtenerConcejo,
    // obtenerMunicipio,
    // obtenerAutoridadT,
    // obtenerAsociacion,
    // EliminarConcejo,
    // Concejo,
    // Municipio,
    // Asociaciones,
    // Autoridad,
    // cargandolista,
    // cargando,
    // validated,
    // datoConcejo,
    // setDatoconcejo,
    // handleActualizarConcejo,
    // nombreBotoGuardarActulizar,
    // setNombreBotoGuardarActulizar

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
      console.log({jefeHogarById})
    } else {
      setMostrarJefeHByID(false)
      setHabilitarAgregar(true)
    }
  }, [id])

  // const onChangeFormulario = (e) => {
  //   const { Id_tipo_documento, value } = e.target
  //   setFormData({ ...formData, [Id_tipo_documento]: value })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setTableItems([...tableItems, formData])
 
  // }

  const eliminarFamiliar = (item) => {
    console.log(item)
  }
  const EditarFamiliar = (item) => {
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
                    jefeHogarById?.map(option => (
                    <>
                    <strong>
                        {option?.nombres} {option?.apellidos}
                      </strong>
                      <div className="small text-medium-emphasis">
                        <span> Identidad: {option?.documentos}</span>
                      </div>
                      
                    </>
                        
                    ))
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
          <CForm onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <CFormSelect
                  type='text'
                  id="Id_tipo_documento"
                  name="Id_tipo_documento"
                  placeholder="Tipo Documento"
                  value={formData.name}
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
                  value={formData.phone}
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
                  value={formData.profile}
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
                  value={formData.phone}
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
                  value={formData.phone}
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
                  value={formData.name}
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
                  value={formData.name}
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
                  value={formData.name}
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
                  value={formData.name}
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
                  value={formData.name}
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
                  value={formData.name}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Sexo...</option>
                  <option value={'Femenino'}>Femenino</option>
                  <option value={'Masculino'}>Masculino</option>
                </CFormSelect>
              </div>
         
           
            </div>
            
            <br/>
            <CButton type="submit"   color={'primary'}
                  variant="outline"
                  className="px-4"
                  disabled ={habilitarAgregar}
                  style={{ width: '100%' }}>Agregar</CButton>
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
                 
                    nucleoFamiliar?.map((item, index) => (

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
                                onClick={() => EditarFamiliar(item.ID)}
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
