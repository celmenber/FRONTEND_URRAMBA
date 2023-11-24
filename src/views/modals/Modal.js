/* eslint-disable prettier/prettier */
import { CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'
const Modal = ({ visible, closeModal, title, content, onClose, onSave }) => {
  return (
    <>
      <CModal
        backdrop="static"
        size="lg"
        alignment="center"
        visible={visible}
        onClose={onClose || closeModal}
        aria-labelledby="VerticallyCenteredExample"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredExample">{title}</CModalTitle>
        </CModalHeader>
        <CModalBody className="pt-1">{content}</CModalBody>
        {/* <CModalFooter>
          <CButton color="secondary" onClick={onClose || closeModal}>
            Close
          </CButton>
          {onSave && (
            <CButton color="primary" onClick={onSave}>
              Save changes
            </CButton>
          )}
        </CModalFooter> */}
      </CModal>
    </>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.node,
  content: PropTypes.node,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
}
export default Modal
