/* eslint-disable prettier/prettier */
import React from 'react'
import {
    CCard,
    CCardBody
    } from '@coreui/react'
import WidgetsDropdown from '../widget/WidgetsDropdown'
import WidgetsProgress from '../widget/WidgetsProgress'

// const WidgetsParque = lazy(() => import('../widgets/WidgetsParques.js'))
//const WidgetsReserva = lazy(() => import('../widgets/WidgetsReservas.js'))

const DashboardParques = () => {
    return (
        <>
            <CCard className="mb-4">

                <CCardBody>
                    <WidgetsDropdown />
                    <WidgetsProgress/>
                </CCardBody>


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
