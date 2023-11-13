/* eslint-disable prettier/prettier */
import React from 'react';
import {CToast, CToastBody, CToastClose} from '@coreui/react'

export const AppToast = (Props) => {
  return (
    <>
          <CToast
              autohide={true}
              visible={Props.toast}
              color={Props.color}
              className="text-white align-items-center"
          >
              <div className="d-flex">
          <CToastBody> {Props.texto} </CToastBody>
                  <CToastClose className="me-2 m-auto" white />
              </div>
          </CToast>
    </>
  )
}
