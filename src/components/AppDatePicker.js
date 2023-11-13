/* eslint-disable prettier/prettier */
import React from 'react'
import { DatePicker } from 'rsuite'
import '../../node_modules/rsuite/dist/rsuite.css';

const styles = { 
            display: 'block',
            color: '#000',
            width: '100%',
            fontsize: '1rem',
            fontweight: 400,
            lineheight: 2
          };

export const CFormCalendarioT = () => {
  return (
    <div>
      <DatePicker oneTap style={styles} />
    </div>
  )
}

export const CTimePicker = () => {
  return (
    <div>
      <DatePicker 
          format="HH:mm" 
          ranges={[]} 
          style={{ width: 260 }}
       />
    </div>
  )
}
