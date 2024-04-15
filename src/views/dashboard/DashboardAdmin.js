/* eslint-disable prettier/prettier */
import React from 'react'
import { CCard, CCardBody } from '@coreui/react'
// import WidgetsDropdown from '../widget/WidgetsDropdown'
// import WidgetBarChart from '../widget/WidgetBarChart'

// const WidgetsParque = lazy(() => import('../widgets/WidgetsParques.js'))
//const WidgetsReserva = lazy(() => import('../widgets/WidgetsReservas.js'))

const DashboardUrramba = () => {
  return (
    <>
      <CCard className="mb-4">
        {/* <CCardBody>
          <WidgetsDropdown />
        </CCardBody> */}

        {/* <CCardBody>
          <WidgetBarChart />
        </CCardBody> */}

        <CCardBody>{/*  <WidgetsParque /> */}</CCardBody>
        {/* <CCardBody>
                    <WidgetsReserva />
                </CCardBody> */}
      </CCard>
    </>
  )
}

export default DashboardUrramba
