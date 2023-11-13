/* eslint-disable prettier/prettier */
import React, { lazy } from 'react'
import {
    CCard,
    CCardBody
    } from '@coreui/react'

// const WidgetsParque = lazy(() => import('../widgets/WidgetsParques.js'))
//const WidgetsReserva = lazy(() => import('../widgets/WidgetsReservas.js'))

const DashboardParques = () => {
    return (
        <>
            <CCard className="mb-4">
                <CCardBody>
                   {/*  <WidgetsParque /> */}
                </CCardBody>
                {/* <CCardBody>
                    <WidgetsReserva />
                </CCardBody> */}
            </CCard>
        </>
    )
}

export default DashboardParques
