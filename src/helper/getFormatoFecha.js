/* eslint-disable prettier/prettier */

import * as moment from 'moment'
export const FormatoFecha = (fech) => {
 const fecha = moment(fech).format('DD/MM/YYYY')
  return fecha
}

export const FormatoHora = (hora) => {
      var strTime = moment(hora, 'H:m').format('h:mm a');
    return strTime
}

export const FormatoHoy = () => {
  var strTime = moment(new Date()).format('YYYY-MM-DD');
  return strTime
}
