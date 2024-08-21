/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { CLoadingButton, CModalTitle } from '@coreui/react-pro'
import {
  CButton,
  CCol,
  CForm,
  CFormFeedback,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
} from '@coreui/react'
import { NucleoFamiliarForm } from 'src/hooks'
import { SelectPicker } from 'rsuite'


const TrasladoMiembro = (Props) => {
  const [validated, setValidated] = useState(false)
  const [valueJH, setValueJH] = useState(0)
  const { visibleTM, setVisibleTM  } = Props
//datoUsuario, setDatoUsuario, onChangeFormulario
  const {
    obtenerJefeHogar,
    JefeHogar,
    cargando,
  } = NucleoFamiliarForm()

  // const { ID_JEFEH, ID_MIEMBRO  } = datoUsuario

  const handleReset = () => {
    /* setDatoUsuario({
      ID_JEFEH: '',
      ID_MIEMBRO: '',
    })*/
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
     /*  const formularioDatos = {
        ID_JEFEH,
        ID_MIEMBRO,
      }

      editarUsuario({
        formularioDatos,
        handleReset,
        Id: ID_MIEMBRO,
      })
        setVisibleUS(false) */
    }
    setValidated(true)
  }

useEffect(() => {
    // Consultar la api un parque
    obtenerJefeHogar()
    // eslint-disable-next-line
  }, [])

   useEffect(() => {
     console.log(valueJH);
     if(valueJH !== 0){
     //  setIdJefeHogar(valueJH)
     }
    // eslint-disable-next-line
  }, [valueJH]);

 const handleClose = () => {
      handleReset()
      setValidated(false)
      setVisibleTM(false)
  }

 const data = JefeHogar?.map(
        item => ({
              label: item.documentos+' '+ item.nombres.toUpperCase() +' '+item.apellidos.toUpperCase(),
              value: item.ID.toString()
        })
    );

 //console.log(JefeHogar)

  return (
    <>
       <CModal size="xl" visible={visibleTM} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle>
            {' '}
            <strong>Corregir el Usuario</strong>
          </CModalTitle>
        </CModalHeader>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <CRow className="g-3">
               <CCol md={12} style={{ marginTop: '15px' }}>
               {/* <CFormLabel htmlFor="validationCustom06" value={''}>Jefe de hogar*</CFormLabel>*/}
                <div className="ml-2">
                   <SelectPicker
                    data={data}
                    placeholder="SELECCIONAR EL JEFE DE HOGAR A TRASLADAR"
                    name="IdJefeHogar"
                    value={valueJH}
                    onChange={setValueJH}
                    size="lg"
                    block
                   />
               </div>
                <CFormFeedback invalid>Seleccione un Municipio por favor.</CFormFeedback>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={10} style={{ marginTop: '20px', marginBottom: '20px' }}>
                {cargando === true ? (
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    style={{ width: '100%' }}
                    timeout={2000}
                  >
                    {' '}
                    {'Actualizando Datos Usuario'}
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'primary'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                    {'Actualizar Datos Usuario'}
                  </CButton>
                )}
              </CCol>
              <CCol xs={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
                <CButton
                  type="button"
                  color={'dark'}
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => handleClose()}
                >
                  {' '}
                  {'Cancelar'}
                </CButton>
              </CCol>
            </CRow>
          </CModalBody>
        </CForm>
      </CModal>
    </>
  )
}
export default TrasladoMiembro
