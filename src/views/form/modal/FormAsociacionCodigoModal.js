/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { CLoadingButton, CModalTitle } from '@coreui/react-pro'
import { FormatoFecha, FormatoHoy } from '../../../helper/index'
import {
  CButton,
  CButtonGroup,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalHeader,
  CPagination,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { AsociacionCodForm } from 'src/hooks'

const FormAsociacionCodigoModal = (Props) => {
  const { visibleCODCV, setVisibleCODCV, datoAsociacion, asociacioncodigo } = Props
  const [validated, setValidated] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  // nuevo state de dataparques
  const [dataCodigo, setDataCodigo] = useState({
    fechaFinaliza: '',
  })

  const handleClose = () => {
    handleReset()
    setVisibleCODCV(false)
  }

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setDataCodigo({
      ...dataCodigo,
      [e.target.name]: e.target.value,
    })
  }

  const {
    crearNuevoAsociacioncod,
    EliminarAsociacionCod,
    updateAsociacioncod,
    obtenerAsociacioncod,
    asociacioncodeditar,
    userDetails,
    cargandolista,
    cargando,
  } = AsociacionCodForm()

  const handleReset = () => {
    setDataCodigo({
      fechaFinal: '',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      const formularioDatos = {
        UsuarioCreacion: userDetails.Id,
        IdAsociacion: datoAsociacion.IdAsociacion,
        nombrEmpresa: datoAsociacion.nombrEmpresa,
        CorreoEmpresa: datoAsociacion.CorreoEmpresa,
        nitEmpresa: datoAsociacion.nitEmpresa,
        FechaFinalizar: dataCodigo.fechaFinaliza,
      }
      console.log(formularioDatos)
      crearNuevoAsociacioncod({
        formularioDatos,
        handleReset,
      })
    }
    setValidated(true)
  }

  const ArrayAsociacioncod = asociacioncodigo?.filter(
    (C) => C.IdAsociacion === datoAsociacion.IdAsociacion,
  )
  const count = ArrayAsociacioncod.length
  const current = 5

  const filterAsociacion = () => {
    return ArrayAsociacioncod?.slice(currentPage, currentPage + current)
  }

  const nextPage = () => {
    if (count > currentPage + current) {
      setCurrentPage(currentPage + current)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - current)
    }
  }

  return (
    <>
      <CModal size="lg" visible={visibleCODCV} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle>
            {' '}
            <strong>Generar Codigo:</strong> <small> {datoAsociacion.nombrEmpresa}</small> |{' '}
            <strong> NIT:</strong> <small> {datoAsociacion.nitEmpresa}</small>
          </CModalTitle>
        </CModalHeader>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <CRow>
              <CCol xs={12}>
                <CRow>
                  <CCol md={12}>
                    <CFormLabel htmlFor="validationDesde03">
                      Fecha Finaliza codigo de validación{' '}
                    </CFormLabel>
                    <CFormInput
                      type="date"
                      name="fechaFinaliza"
                      key={'validationCustom03'}
                      id="validationCustom03"
                      onChange={onChangeFormulario}
                      min={FormatoHoy()}
                      value={dataCodigo.fechaFinaliza}
                      required
                    />
                    <CFormFeedback invalid>
                      Este campo Finaliza codigo de validación es requerido.
                    </CFormFeedback>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol md={12} style={{ marginBottom: '10px', marginTop: '20px' }}>
                    {cargando === true ? (
                      <CLoadingButton
                        color="success"
                        variant="outline"
                        style={{ width: '100%' }}
                        timeout={2000}
                      >
                        {' '}
                        Generando Codigo
                      </CLoadingButton>
                    ) : (
                      <CButton
                        type="submit"
                        color={'primary'}
                        className="px-4"
                        style={{ width: '100%' }}
                      >
                        {' '}
                        {'Generar Codigo'}
                      </CButton>
                    )}
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol xs={12}>
                {ArrayAsociacioncod.length === 0 ? (
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell colSpan={8} className="text-center">
                          <h3>No hay Codigo Registrados </h3>
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                  </CTable>
                ) : (
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Fecha Creación</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Fecha Finaliza</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Codigo Validación</CTableHeaderCell>
                        <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                          ...
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {cargandolista === true ? (
                        <CTableRow key={0}>
                          <CTableHeaderCell colSpan={4} className="text-center">
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
                        filterAsociacion().map((item, index) => (
                          <CTableRow key={index}>
                            <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                            <CTableDataCell>{FormatoFecha(item.FechaCreacion)}</CTableDataCell>
                            <CTableDataCell>{FormatoFecha(item.FechaFinalizar)}</CTableDataCell>
                            <CTableDataCell>{item.Codigo}</CTableDataCell>
                            <CTableDataCell style={{ width: '20%' }}>
                              <CButton
                                style={{ textAlign: 'center' }}
                                color="danger"
                                variant="outline"
                                onClick={() => EliminarAsociacionCod(item.Id)}
                              >
                                {' '}
                                Quitar Codigo
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>
                        ))
                      )}
                    </CTableBody>
                  </CTable>
                )}
              </CCol>
              <CCol xs={12}>
                <CPagination size="sm" aria-label="Page navigation" style={{ float: 'right' }}>
                  <CButtonGroup role="group" aria-label="Basic outlined example">
                    <CButton
                      color="secondary"
                      onClick={prevPage}
                      disabled={'currentPage' === 0 && true}
                    >
                      Anterior
                    </CButton>
                    <CButton
                      color="secondary"
                      onClick={nextPage}
                      disabled={count < currentPage + current + 1 && true}
                    >
                      Siguiente
                    </CButton>
                  </CButtonGroup>
                </CPagination>
              </CCol>
            </CRow>
          </CModalBody>
        </CForm>
      </CModal>
    </>
  )
}
export default FormAsociacionCodigoModal
