/* eslint-disable prettier/prettier */
import { CCardFooter, CCol, CProgress, CRow } from '@coreui/react'
import React from 'react'
const WidgetsProgress = () => {
    const progressExample = [
        { title: 'Victima Conflicto', value: '4.655 Personas', percent: 54.3, color: 'success' },
        { title: 'Discriminación', value: '581 Personas', percent: 10, color: 'info' },
        { title: 'Pertenecientes', value: '1.456 Familias', percent: 55, color: 'warning' },
        { title: 'Pertenecientes', value: '8.563 Personas', percent: 80, color: 'danger' },
        { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
      ]
  return (
    <>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
    </>
  )
}
export default WidgetsProgress